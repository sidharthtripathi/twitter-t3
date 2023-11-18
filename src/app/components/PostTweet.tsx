"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import TextAreaAuto from "react-textarea-autosize";
function PostTweet() {
  const [val, setVal] = useState("");
  async function handleClick() {
    const payload = {
      title: val,
    };
    const res = await fetch("/api/tweet/create", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setVal("");
      toast.success("Tweet created", {
        position: "bottom-center",
      });
    }
  }

  return (
    <div className="flex flex-col grow">
      <TextAreaAuto
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
        placeholder="what's on your mind.."
        className="px-3 py-2 w-full bg-slate-700 text-white rounded-2xl resize-none"
      />

      <button
        onClick={() => {
          handleClick();
        }}
        disabled={val === ""}
        style={{ cursor: val === "" ? "not-allowed" : "pointer" }}
        className=" self-end mt-2 text-white dark:text-white bg-blue-500 hover:bg-blue-700 duration-100 font-bold px-4 py-2 rounded-full"
      >
        Post
      </button>
    </div>
  );
}

export default PostTweet;
