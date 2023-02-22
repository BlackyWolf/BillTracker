import { signInWithEmail } from '$lib/auth/signInWithEmail';
import type { AuthError } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async (event) => {
        const request = event.request;
        const formData = await request.formData();
        const email = formData.get('email')?.valueOf() as string;
        const password = formData.get('password')?.valueOf() as string;

        if (!email) {
            return {
                error: 'The email is required.'
            };
        }

        if (!password) {
            return {
                email,
                error: 'The password is required.'
            };
        }

        try {
            await signInWithEmail(email, password);

            return redirect(302, '/my')
        } catch (error) {
            var authError = error as AuthError;

            if (authError) {
                return {
                    email,
                    error: authError.message
                };
            }
        }
    }
};
