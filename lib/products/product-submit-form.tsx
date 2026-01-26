"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { LoaderIcon, SparklesIcon } from "lucide-react";
import { addProductAction } from "@/lib/products/product-actions";
import { useActionState } from "react";
import { FormState } from "@/types";
import { cn } from "@/lib/utils";

const initialState: FormState = {
  success: false,
  errors: undefined,
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );

  const { errors, message, success } = state;
  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive"
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error={getFieldErrors("name")}
      />
      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        error={getFieldErrors("slug")}
        helperText="The slug is the URL-friendly version of the product name."
      />
      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A short, catchy tagline for your product"
        required
        onChange={() => {}}
        error={getFieldErrors("tagline")}
      />

      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell us about your product..."
        required
        onChange={() => {}}
        error={getFieldErrors("description")}
        textarea
      />

      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://www.yourproduct.com"
        required
        onChange={() => {}}
        error={getFieldErrors("websiteurl")}
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Productivity, SaaS"
        required
        onChange={() => {}}
        error={getFieldErrors("tags")}
        helperText="Comma-separated tags (e.g., AI, Productivity, SaaS)"
      />

      <Button type="submit" size="lg" className="w-full">
        {isPending ? (
          <LoaderIcon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
