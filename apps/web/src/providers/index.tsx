"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "antd-style";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ThemeProvider appearance="light">
        {children}
      </ThemeProvider>
    </AntdRegistry>
  );
}
