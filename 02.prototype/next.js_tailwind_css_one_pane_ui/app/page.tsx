"use client";

import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Content } from "../components/Content";

export default function Home() {
  const [selected, setSelected] = useState("ホーム");

  return (
    <div className="flex h-screen">
    <Sidebar selected={selected} onSelect={setSelected} />
    <Content page={selected} />
    </div>
  );
}
