import { useState } from "react";
import { useWaitlist, waitlistSchema } from "@/hooks/use-waitlist";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

type FormData = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const { submit, isLoading } = useWaitlist();
  
  const form = useForm<FormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    submit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input 
                    placeholder="Enter your email" 
                    className="px-4 py-3 text-slate-900 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" 
                    {...field} 
                  />
                </FormControl>
                <FormLabel className="absolute top-3 left-4 text-slate-600 transition-all duration-200 origin-left transform-gpu scale-75 -translate-y-5 bg-white px-1">
                  Enter your email
                </FormLabel>
              </div>
              <FormMessage className="text-sm text-red-600 mt-1" />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full px-6 py-3 text-base font-medium rounded-md shadow-sm transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </form>
      
      <p className="mt-3 text-sm text-slate-500 text-center">
        We'll never share your email. By signing up, you agree to our <a href="#" className="text-primary hover:text-primary/90">Terms</a> and <a href="#" className="text-primary hover:text-primary/90">Privacy Policy</a>.
      </p>
    </Form>
  );
}
