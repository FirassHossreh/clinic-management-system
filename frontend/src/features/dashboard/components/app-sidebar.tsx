"use client";

import * as React from "react";
import {
  BookOpen,
  Stethoscope,
  Users,
  AlertTriangle,
  HeartPulse,
  ClipboardCheck,
  FileText,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Scroll,
  TestTube,
  SquareSplitVerticalIcon,
  Microscope,
  Scissors,
  Calendar,
} from "lucide-react";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "التاريخ الطبي",
      url: "medical-history",
      icon: BookOpen,
    },
    {
      title: "الزيارة الطبية",
      url: "medical-visit",
      icon: Stethoscope,
    },
    {
      title: "تاريخ الاسرة",
      url: "family-history",
      icon: Users,
    },
    {
      title: "الحساسية",
      url: "allergies",
      icon: AlertTriangle,
    },
    {
      title: "ضغط الدم",
      url: "blood-pressure",
      icon: HeartPulse,
    },
    {
      title: "الفحص",
      url: "examination",
      icon: ClipboardCheck,
    },
    {
      title: "روشتة",
      url: "prescription",
      icon: Scroll,
    },
    {
      title: "التحاليل",
      url: "lab-tests",
      icon: TestTube,
    },
    {
      title: "الاشعة",
      url: "radiology",
      icon: SquareSplitVerticalIcon,
    },
    {
      title: "الباثولوجي",
      url: "pathology",
      icon: Microscope,
    },
    {
      title: "الجراحة",
      url: "surgery",
      icon: Scissors,
    },
    {
      title: "ملاحظات",
      url: "notes",
      icon: FileText,
    },
    {
      title: "تحديد الموعد",
      url: "appointment",
      icon: Calendar,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-right text-sm leading-tight">
                  الصفحة الرئيسية
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
