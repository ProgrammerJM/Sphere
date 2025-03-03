"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

async function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsloading] = useState(false);

  const handleFollow = async () => {};

  setIsloading(true);

  try {
    await toggleFollow(userId);
    toast.success("User followed successfully");
  } catch (error) {
    toast.error("Failed to follow user");
  } finally {
    setIsloading(false);
  }

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? (
        <Loader2Icon
          className="size4 animated
        "
        />
      ) : (
        "Follow"
      )}
    </Button>
  );
}

export default FollowButton;
