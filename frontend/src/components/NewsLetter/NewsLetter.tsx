import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const NewsLetter = () => {
  const { toast } = useToast();

  return (
    <div className="mt-20 flex justify-center items-center flex-col gap-12">
      <div className="text-5xl">
        Subscribe to Our
        <span className="text-blue-500 font-extrabold"> Newsletter</span>
      </div>
      <p className="w-4/5 text-gray-500 text-center text-lg">
        Stay in the loop and never miss a beat! Subscribe to our newsletter to
        receive exclusive updates, insights, and exciting news directly to your
        inbox. Join our vibrant community of your enthusiasts and be part of the
        conversation.
      </p>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();

          //  TODO: Send the email to the backend
        }}
      >
        <div className="flex gap-10 justify-center items-center text-lg">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className=" py-2 px-4 w-
            64 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <Button
            className="py-6 px-3 text-lg bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              toast({
                variant: "newsletter",
                description:
                  "Thanks for joining our community! Get ready for exciting updates. 🌟",
              });
            }}
          >
            Subscribe Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
