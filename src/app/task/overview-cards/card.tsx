// import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
// import { cn } from "@/lib/utils";
'use client';
import type { JSX, SVGProps } from "react";

import { ChevronUpIcon } from "@/assets/icons";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import Link from "next/link";
import { useState } from "react";
 
const ITEMS = ["1", "2", "3", "4"];

type PropsType = {
  label: string;
  data: {
    value: any;
  };
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function OverviewCard({ label, data, Icon }: PropsType) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon />

      <div className="mt-6 flex items-end justify-between">
        <dl>

          <dd className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">{label}</dd>

          <dt className="text-sm font-medium text-dark-6">
            {data.value}
          </dt>

        </dl>

        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
        <DropdownTrigger
          className="flex items-center gap-2.5 rounded-[7px] px-5.5 py-[13px] font-medium text-grey-900"
        >
          <span>Select</span>
          <ChevronUpIcon className="size-5 rotate-180 transition-transform data-[state=open]:rotate-0" />
        </DropdownTrigger>
 
        <DropdownContent
          align="start"
          className="mt-2 w-full max-w-[200px] rounded-[7px] py-3 shadow-card-4"
        >
          <ul className="flex flex-col">
            {ITEMS.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="flex px-5 py-[7px] font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </DropdownContent>
      </Dropdown>

        {/* <dl
          className={cn(
            "text-sm font-medium",
            isDecreasing ? "text-red" : "text-green",
          )}
        >
          <dt className="flex items-center gap-1.5">
            {data.growthRate}%
            {isDecreasing ? (
              <ArrowDownIcon aria-hidden />
            ) : (
              <ArrowUpIcon aria-hidden />
            )}
          </dt>

          <dd className="sr-only">
            {label} {isDecreasing ? "Decreased" : "Increased"} by{" "}
            {data.growthRate}%
          </dd>
        </dl> */}
      </div>
    </div>
  );
}
