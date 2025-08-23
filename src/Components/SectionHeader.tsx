import Link from "next/link";
import React from "react";

// حالت‌های مختلف رو به صورت union تعریف می‌کنیم:
type SectionHeaderProps =
  | {
      mode: "title-link";
      title: string;
      link: string;
      linkTitle?: string;
    }
  | {
      mode: "title-caption-link";
      title: string;
      caption: string;
      link: string;
      linkTitle?: string;
    }
  | {
      mode: "title-caption-children";
      title: string;
      caption: string;
      children: React.ReactNode;
    }
  | {
      mode: "title-children";
      title: string;
      children: React.ReactNode;
    };

const SectionHeader = (props: SectionHeaderProps) => {
  switch (props.mode) {
    case "title-link":
      return (
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-dana-dbold text-lg">{props.title}</h3>
          <Link href={props.link}>{props.linkTitle ?? "مشاهده بیشتر"}</Link>
        </div>
      );

    case "title-caption-link":
      return (
        <div className="mb-6">
          <h3 className="font-dana-dbold text-lg">{props.title}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500">{props.caption}</p>
            <Link href={props.link}>{props.linkTitle ?? "مشاهده بیشتر"}</Link>
          </div>
        </div>
      );

    case "title-caption-children":
      return (
        <div className="mb-6">
          <h3 className="font-dana-dbold text-lg">{props.title}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500">{props.caption}</p>
            <div className="flex items-center gap-2">{props.children}</div>
          </div>
        </div>
      );

    case "title-children":
      return (
        <div className="mb-6">
          <h3 className="font-dana-dbold text-lg">{props.title}</h3>
          <div className="mt-3">{props.children}</div>
        </div>
      );

    default:
      return null;
  }
};

export default SectionHeader;
