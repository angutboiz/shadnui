import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";

import { MainNav } from "@/components/ui/main-nav";
import { Overview } from "@/components/ui/overview";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function page() {
    const invoices = [
        {
            invoice: "69",
            paymentStatus: "start",
            totalAmount: "13",
            paymentMethod: "9",
        },
        {
            invoice: "50",
            paymentStatus: "marketing-channels",
            totalAmount: "6",
            paymentMethod: "3",
        },
        {
            invoice: "69",
            paymentStatus: "start",
            totalAmount: "13",
            paymentMethod: "9",
        },
        {
            invoice: "50",
            paymentStatus: "marketing-channels",
            totalAmount: "6",
            paymentMethod: "3",
        },
        {
            invoice: "69",
            paymentStatus: "start",
            totalAmount: "13",
            paymentMethod: "9",
        },
        {
            invoice: "50",
            paymentStatus: "marketing-channels",
            totalAmount: "6",
            paymentMethod: "3",
        },
        {
            invoice: "69",
            paymentStatus: "start",
            totalAmount: "13",
            paymentMethod: "9",
        },
        {
            invoice: "50",
            paymentStatus: "marketing-channels",
            totalAmount: "6",
            paymentMethod: "3",
        },
        {
            invoice: "69",
            paymentStatus: "start",
            totalAmount: "13",
            paymentMethod: "9",
        },
        {
            invoice: "50",
            paymentStatus: "marketing-channels",
            totalAmount: "6",
            paymentMethod: "3",
        },
        {
            invoice: "69",
            paymentStatus: "start",
            totalAmount: "13",
            paymentMethod: "9",
        },
    ];

    return (
        <div className="flex justify-center">
            <div className="w-[1300px]">
                <div className="md:hidden">
                    <Image src="/examples/dashboard-light.png" width={1280} height={866} alt="Dashboard" className="block dark:hidden" />
                    <Image src="/examples/dashboard-dark.png" width={1280} height={866} alt="Dashboard" className="hidden dark:block" />
                </div>
                <div className="hidden flex-col md:flex">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <div className="flex items-center justify-between space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                            <div className="flex items-center space-x-2"></div>
                        </div>
                        <Tabs defaultValue="overview" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="overview">
                                    <CalendarDateRangePicker />
                                </TabsTrigger>
                                <TabsTrigger value="analytics" disabled>
                                    28 days
                                </TabsTrigger>
                                <TabsTrigger value="reports" disabled>
                                    14 days
                                </TabsTrigger>
                                <TabsTrigger value="notifications" disabled>
                                    7 days
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground">
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">$45,231.89</div>
                                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+2350</div>
                                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground">
                                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                                <path d="M2 10h20" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+12,234</div>
                                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+573</div>
                                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                    <Card className="col-span-4">
                                        <CardHeader>
                                            <CardTitle>Overview</CardTitle>
                                        </CardHeader>
                                        <CardContent className="pl-2">
                                            <Overview />
                                        </CardContent>
                                    </Card>
                                    <Card className="col-span-3">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="">#</TableHead>
                                                    <TableHead className="">Screen</TableHead>
                                                    <TableHead>Screen views</TableHead>
                                                    <TableHead>Exits</TableHead>
                                                    <TableHead>Drop of rate</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {invoices.map((invoice, index) => (
                                                    <TableRow key={invoice.invoice}>
                                                        <TableCell>{index + 1}</TableCell>
                                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                                        <TableCell>{invoice.totalAmount}</TableCell>
                                                        <TableCell>{invoice.invoice}%</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
