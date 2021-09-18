import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

const Markdown = ({ children }) => {
    return (
        <MDXProvider>
            <MDXRenderer>{children}</MDXRenderer>
        </MDXProvider>
    );
};

export default Markdown;
