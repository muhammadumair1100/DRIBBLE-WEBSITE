import React from "react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserDetail from "./UserDetail";

const SelectedCard = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-150 flex flex-col">
      <div className="flex h-10 w-full shrink-0 items-center justify-end bg-white px-3 lg:bg-black/80">
        <X
          className="cursor-pointer transition-colors hover:text-gray-300 lg:text-white"
          size={20}
          strokeWidth={2.5}
          onClick={() => navigate(-1)}
        />
      </div>

      <UserDetail />
    </div>
  );
};

export default SelectedCard;
