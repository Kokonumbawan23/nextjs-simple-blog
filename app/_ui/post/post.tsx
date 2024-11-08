"use client";

import clsx from "clsx";
import Image from "next/image";
import { useReducer, useState } from "react";
import Tiptap from "@/app/_ui/component/editor/editor";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const comments = 100;
  const [likes, dispatch] = useReducer(
    (state: number, action: { type: string }) => {
      switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
    },
    0,
  );

  return (
    <div className="w-full">
      <Image
        src={"/header.jpg"}
        alt="Header Image"
        width={1080}
        height={0}
        className="w-full h-auto sm:my-2 md:my-4 lg:my-8 rounded-lg"
      />
      <p className="text-justify sm:text-sm md:text-md lg:text-lg sm:mb-2 md:mb-4 lg:mb-8 text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum a
        doloribus molestias ex numquam quisquam excepturi laborum asperiores
        incidunt, temporibus quia molestiae modi voluptatum nobis illo soluta
        illum quos nesciunt magnam perferendis, quam odio ab praesentium.
        Distinctio voluptatem reiciendis, nam expedita blanditiis ullam nisi
        alias? Voluptas eos voluptate accusantium perferendis! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita consectetur
        repudiandae deserunt quaerat mollitia alias, ad officiis. Ducimus,
        officiis accusamus.
      </p>

      <p className="text-justify sm:text-sm md:text-md lg:text-lg sm:mb-2 md:mb-4 lg:mb-8 text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi suscipit
        vitae, dicta aut eaque temporibus beatae expedita commodi a tenetur,
        tempora quidem sunt laboriosam corporis, harum inventore! Nam laudantium
        vel eaque aliquam ut voluptatum voluptate culpa, ad iusto minima. Amet
        repellat ipsam tempore rerum fugit ut quisquam consequuntur impedit
        soluta voluptas nulla quaerat quod autem aut, saepe sint fugiat officiis
        nihil. Ab molestias ut, est culpa et fuga, corporis aliquid nemo
        possimus veniam asperiores consequuntur omnis nesciunt? Repudiandae
        distinctio nihil illo recusandae, similique perferendis omnis accusamus
        sint, minima placeat nobis eum cumque magnam quasi esse iste possimus
        quis. Fuga, quod.
      </p>

      <p className="text-justify sm:text-sm md:text-md lg:text-lg sm:mb-2 md:mb-4 lg:mb-8 text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi suscipit
        vitae, dicta aut eaque temporibus beatae expedita commodi a tenetur,
        tempora quidem sunt laboriosam corporis, harum inventore! Nam laudantium
        vel eaque aliquam ut voluptatum voluptate culpa, ad iusto minima. Amet
        repellat ipsam tempore rerum fugit ut quisquam consequuntur impedit
        soluta voluptas nulla quaerat quod autem aut, saepe sint fugiat officiis
        nihil. Ab molestias ut, est culpa et fuga, corporis aliquid nemo
        possimus veniam asperiores consequuntur omnis nesciunt? Repudiandae
        distinctio nihil illo recusandae, similique perferendis omnis accusamus
        sint, minima placeat nobis eum cumque magnam quasi esse iste possimus
        quis. Fuga, quod.
      </p>

      {/* Like Comment Wrapper */}
      <div className="flex justify-start sm:gap-2 md:gap-3 lg:gap-4 items-center my-4 py-4">
        {/* Like Icon */}
        <div className="flex gap-2">
          <button
            onClick={(): void => {
              setLiked(!liked);
              if (liked) {
                dispatch({ type: "decrement" });
              } else {
                dispatch({ type: "increment" });
              }
            }}
          >
            <i
              className={clsx("sm:text-xl md:text-2xl lg:text-3xl", {
                "fa-solid fa-heart text-red-500": liked === true,
                "fa-solid fa-heart text-white": liked === false,
              })}
            ></i>
          </button>
          <span>
            <span className="sm:text-sm md:text-md lg:text-lg">{likes}</span>
          </span>
        </div>
        {/* Comment icon */}
        <div className="flex gap-2">
          <button onClick={(): void => {}}>
            <i className="fa-solid fa-comment sm:text-xl md:text-2xl lg:text-3xl"></i>
          </button>
          <span>
            <span className="sm:text-sm md:text-md lg:text-lg">{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
