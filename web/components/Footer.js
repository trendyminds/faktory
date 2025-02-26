import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getPathFromSlug } from "../utils/urls";

function Footer({ navItems }) {
  // chunk navItems into 2 columns
  const navItemColumns = navItems.reduce(
    (acc, navItem, index) => {
      if (index >= Math.ceil(navItems.length / 2)) {
        acc[1].push(navItem);
      } else {
        acc[0].push(navItem);
      }
      return acc;
    },
    [[], []]
  );

  return (
    <footer className="grid lg:grid-cols-3 gap-8 2xl:gap-24 gap-y-24 py-24 px-4 lg:px-14 text-medium-gray text-center lg:text-left bg-dark-gray">
      <div className="grid lg:grid-cols-3 gap-8 2xl:gap-12 items-start text-sm user-content">
        <Link href="/">
          <a className="lg:col-span-1">
            <Image
              alt="Faktory logo"
              src="/images/faktory-gray.svg"
              height="80px"
              width="145px"
            />
          </a>
        </Link>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-y-8">
            <div>
              <p className="underline underline-offset-4 font-semibold">
                Colorado
              </p>
              <p>
                1800 Wazee St, Suite 300
                <br />
                Denver, CO 80202
              </p>
              <p>
                <span className="italic">info@faktorymail.com</span>
                <br />
                Tel: 317.926.1727
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center grid gap-12">
        <div className="flex justify-around max-w-xs grid-cols-3 mx-auto gap-8">
          <a href="https://www.facebook.com/faktoryagency/">
            <Image
              src="/images/facebook.svg"
              alt="Facebook logo"
              width="40px"
              height="40px"
            />
          </a>
          <a href="https://www.instagram.com/faktory/">
            <Image
              src="/images/instagram.svg"
              alt="Instagram logo"
              width="40px"
              height="40px"
            />
          </a>
          <a href="https://www.linkedin.com/company/faktory-showroom/">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn logo"
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Faktory, Inc. All Rights Reserved.
        </p>
      </div>
      <div className="mx-auto w-full flex justify-around items-start max-w-sm font-semibold tracking-wider uppercase font-display">
        {/* print each column */}
        {navItemColumns.map((navItemColumn, index) => {
          return (
            <div className="grid gap-y-4 items-start" key={index}>
              {navItemColumn.map((navItem) => {
                // print each navItem
                return (
                  <Link
                    href={getPathFromSlug(navItem?.slug?.current)}
                    key={navItem._id}
                  >
                    <a className="block">{navItem.title}</a>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
