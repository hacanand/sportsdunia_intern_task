import { PayoutsDataTable } from "@/components/payouts-data-table";

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Payouts</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Payout Reports</h3>
        <PayoutsDataTable />
      </div>
    </div>
  );
}
