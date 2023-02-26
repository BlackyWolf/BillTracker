<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import DataList from "$lib/components/forms/DataList.svelte";
    import Input from "$lib/components/forms/Input.svelte";
    import TextArea from "$lib/components/forms/TextArea.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import type { PageData } from "./$types";

    let showModal = false;

    function setShowModal() {
        showModal = true;
    }

    export let data: PageData;
</script>

<table class="min-w-full divide-y divide-gray-300">
    <thead>
        <tr>
            <th class="text-left text-sm font-semibold text-gray-900 py-3.5 pl-6 pr-3 sm:pl-0">#</th>
            <th class="text-left text-sm font-semibold text-gray-900 py-3.5 px-3">Description</th>
            <th class="text-left text-sm font-semibold text-gray-900 py-3.5 px-3">Amount</th>
            <th class="text-left text-sm font-semibold text-gray-900 py-3.5 px-3">Due Date</th>
            <th class="text-left text-sm font-semibold text-gray-900 py-3.5 px-3">Paid</th>
            <th class="text-left text-sm font-semibold text-gray-900 py-3.5 px-3">Frequency</th>
            <th>
                <Button color="success" on:click={setShowModal}>
                    <i class="fa-duotone fa-plus fa-lg mr-2"></i>
                    New
                </Button>
            </th>
        </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
        {#each data.bills as bill}
            <tr>
                <td>{bill.id}</td>
                <td>{bill.description}</td>
                <td>{bill.amount}</td>
                <td>{bill.due}</td>
                <td>{bill.paid} {bill.paid ? bill.paidOn : null}</td>
                <td>
                    <Button color="danger">
                        <i class="fa-duotone fa-trash-can fa-lg mr-2"></i>
                        Delete
                    </Button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<Modal bind:show={showModal}>
    <p slot="header">New Bill</p>

    <form class="space-y-6">
        <Input label="Title" name="title" placeholder="e.g., Electricity" />

        <TextArea rows={4} label="Description" name="description" placeholder="For apartment from my Local Electric Co." />

        <div class="grid grid-cols-2 gap-4">
            <Input label="Amount" name="amount" placeholder="$223.06" />
            <Input type="date" label="Due" name="due" />
        </div>

        <DataList label="Frequency" name="frequency" list="frequencyType">
            <option value="daily" />
            <option value="weekly" />
            <option value="bi-weekly" />
            <option value="bi-monthly" />
            <option value="monthly" />
            <option value="quarterly" />
            <option value="semi-annually" />
            <option value="annually" />
        </DataList>

        <div class="flex">
            <Button color="primary" type="submit">
                Save
            </Button>
            <Button color="danger" css="ml-auto">
                Cancel
            </Button>
        </div>
    </form>
</Modal>
