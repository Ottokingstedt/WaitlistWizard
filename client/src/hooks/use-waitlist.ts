import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { z } from "zod";

// Email validation schema
export const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export function useWaitlist() {
  const [isValidating, setIsValidating] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: WaitlistInput) => {
      setIsValidating(true);
      const response = await apiRequest("POST", "/api/waitlist", data);
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when you're granted access.",
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsValidating(false);
    },
  });

  return {
    submit: mutation.mutate,
    isLoading: mutation.isPending || isValidating,
    error: mutation.error,
  };
}
