"use client";
import { SidebarIcon } from "lucide-react";

import { SearchForm } from "./search-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
export function SiteHeader() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const currentTab = pathname.split("/")[1];
  const tabs = [
    { currentTabName: "medical-history", currentTabNameAr: "التاريخ الطبي" },
    { currentTabName: "medical-visit", currentTabNameAr: "الزيارة الطبية" },
    { currentTabName: "family-history", currentTabNameAr: "التاريخ العائلي" },
    { currentTabName: "allergies", currentTabNameAr: "الحساسية" },
    { currentTabName: "blood-pressure", currentTabNameAr: "ضغط الدم" },
    { currentTabName: "examination", currentTabNameAr: "الفحص" },
    { currentTabName: "prescription", currentTabNameAr: "الوصفة الطبية" },
    { currentTabName: "lab-tests", currentTabNameAr: "التحاليل المخبرية" },
    { currentTabName: "radiology", currentTabNameAr: "الأشعة" },
    { currentTabName: "pathology", currentTabNameAr: "الباثولوجي" },
    { currentTabName: "surgery", currentTabNameAr: "الجراحة" },
    { currentTabName: "notes", currentTabNameAr: "الملاحظات" },
    { currentTabName: "appointment", currentTabNameAr: "الموعد" },
  ];
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8 rotate-180"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        {currentTab === "" ? (
          "الصفحة الرئيسية ( جميع المرضة )"
        ) : (
          <Breadcrumb className="hidden sm:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={currentTab}>{currentTab}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="rotate-180" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>
      <div className="flex h-(--header-height) items-center gap-2 px-4">
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  );
}
