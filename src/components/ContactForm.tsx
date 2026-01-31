import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-wider text-primary/70">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-0 rounded-none h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-wider text-primary/70">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    {...field} 
                    className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-0 rounded-none h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold tracking-wider text-primary/70">Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+91 ..." 
                  {...field} 
                  value={field.value || ""}
                  className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-0 rounded-none h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold tracking-wider text-primary/70">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  {...field} 
                  className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-0 rounded-none min-h-[150px] resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full h-14 bg-accent hover:bg-accent/90 text-primary font-bold uppercase tracking-wider text-sm rounded-none shadow-lg transition-all"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Send Inquiry"
          )}
        </Button>
      </form>
    </Form>
  );
}
