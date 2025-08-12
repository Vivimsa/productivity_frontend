import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {GithubIcon, SearchIcon} from "@/components/icons";
import {Kbd} from "@heroui/kbd";
import {Input} from "@heroui/input";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Make&nbsp;</span>
                <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
                <br />
                <span className={title()}>
          websites regardless of your design experience.
        </span>
                <div className={subtitle({ class: "mt-4" })}>
                    Beautiful, fast and modern React UI library.
                </div>
            </div>

            <div className="flex gap-3">
                <Input
                    aria-label="Search"
                    classNames={{
                        inputWrapper: "bg-default-100",
                        input: "text-sm",
                    }}
                    endContent={
                        <Kbd className="hidden lg:inline-block" keys={["command"]}>
                            K
                        </Kbd>
                    }
                    labelPlacement="outside"
                    placeholder="Search..."
                    startContent={
                        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="search"
                />
            </div>

            <div className="mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
                </Snippet>
            </div>
        </section>
    );
}
