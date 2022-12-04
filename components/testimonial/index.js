import React from "react";

const Testimonial = (props) => {
  const { data } = props;
  return (
    <div
      class="pt-10 pb-10 max-w-sm rounded-lg overflow-hidden shadow-lg"
      style={{
        background: "#F1F3F7",
      }}
    >
      <div className="flex justify-center w-full">
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        >
          <img src={data?.image} width={200} alt="Sunset in the mountains" />
        </div>
      </div>

      <div class="px-6 py-4 mt-10">
        <div class="font-bold text-xl mb-2">
          {data?.name || "Subhash Kalarathi"}
        </div>
        <p class="text-gray-700 text-base">{data?.description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">{data?.city || "Mumbai"}</div>
    </div>
  );
};

export default Testimonial;
