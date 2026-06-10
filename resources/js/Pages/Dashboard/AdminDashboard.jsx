import React from "react";
import { Link } from "@inertiajs/react";
import Button from "../../Components/Buttons";
import { Icon } from "@iconify/react";

export default function AdminDashboard({
    stats,
    recentEvents,
    recentTicketPayments,
    user,
}) {
    return (
        <div className="p-4 md:p-8 w-full max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Welcome back, Admin
                </h1>
                <p className="text-gray-500">
                    Here's what's happening with your events today.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6">
                    <p className="text-sm text-gray-500">Total Users</p>
                    <p className="text-3xl font-bold">{stats.totalUsers}</p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <p className="text-sm text-gray-500">Event Organizers</p>
                    <p className="text-3xl font-bold">
                        {stats.totalEventOrganizers}
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <p className="text-sm text-gray-500">Tenants</p>
                    <p className="text-3xl font-bold">{stats.totalTenants}</p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <p className="text-sm text-gray-500">Paid Tickets</p>
                    <p className="text-3xl font-bold">
                        {stats.totalPaidTickets}
                    </p>
                </div>

                <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 h-full">
                    <Button
                        href="/events/create"
                        className="flex-1 flex flex-col items-center justify-center gap-3 bg-white border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-all rounded-2xl p-6 min-h-[120px]"
                        variant="ghost"
                    >
                        <Icon icon="bx:plus-circle" width={32} />
                        <span className="font-semibold">Create New Event</span>
                    </Button>
                    <Button
                        href="/events"
                        className="flex-1 flex flex-col items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white transition-all rounded-2xl p-6 min-h-[120px]"
                    >
                        <Icon icon="bx:calendar-event" width={32} />
                        <span className="font-semibold">Manage All Events</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
