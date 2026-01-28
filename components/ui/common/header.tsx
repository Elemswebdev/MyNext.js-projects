"use client";

import {
  CompassIcon,
  HomeIcon,
  LoaderIcon,
  MenuIcon,
  SparkleIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Suspense, useState } from "react";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-primary">Built</span>This
      </span>
    </Link>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-4 md:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
            >
              <HomeIcon className="size-4" />
              Home
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
            >
              <CompassIcon className="size-4" />
              Explore
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Suspense
              fallback={
                <LoaderIcon className="size-4 animate-spin text-muted-foreground" />
              }
            >
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Button asChild>
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
                <CustomUserButton />
              </SignedIn>
            </Suspense>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden mt-2 rounded-lg border bg-background shadow-lg">
            <nav className="flex flex-col gap-2 p-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <HomeIcon className="size-4" />
                Home
              </Link>

              <Link
                href="/explore"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <CompassIcon className="size-4" />
                Explore
              </Link>

              <Suspense
                fallback={
                  <LoaderIcon className="size-4 animate-spin text-muted-foreground" />
                }
              >
                <SignedOut>
                  <SignInButton />
                  <SignUpButton>
                    <Button className="w-full">Sign Up</Button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <Button asChild className="w-full">
                    <Link href="/submit">
                      <SparklesIcon className="size-4" />
                      Submit Project
                    </Link>
                  </Button>
                  <CustomUserButton />
                </SignedIn>
              </Suspense>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
