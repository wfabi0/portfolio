import {
  // Bot,
  Check,
  Code,
  Copy,
  GraduationCap,
  Laptop,
  MapPin,
  Pizza,
  Rss,
  Search,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SocialMidia from "./components/SocialMidia";
import ThemeToggle from "./components/ThemeToggle";

const imageUrl = "https://github.com/wfabi0.png";
const email = "wfabi0@hotmail.com";

const iconMap = {
  pizza: Pizza,
  search: Search,
  rss: Rss,
} as const;

interface ProjectItem {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

interface PersonalProject extends ProjectItem {
  icon: keyof typeof iconMap;
}

export default function App() {
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="flex justify-center min-h-screen p-7 bg-slate-50 text-black dark:bg-zinc-800 dark:text-white transition-colors">
        <div className="w-full max-w-2xl relative">
          <div className="absolute top-0 right-0 flex gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="my-12 space-y-10">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="order-2 md:order-1 mt-6 md:mt-0 w-full md:w-auto md:flex-1">
                <div className="font-extrabold text-[2.3rem] md:text-[2rem] lg:text-[2.3rem]">
                  FÁBIO MILAGRES
                </div>
                <div className="text-[0.95rem] text-zinc-600 dark:text-zinc-300">
                  {t("about")}
                </div>
                <div className="flex flex-wrap text-[0.95rem] items-center gap-x-2 gap-y-1">
                  <div className="flex items-center gap-x-1">
                    <MapPin className="h-4 w-4" />
                    <p>{t("locale")}</p>
                  </div>
                  <div className="h-1 w-1 bg-black dark:bg-white rounded-full" />
                  <div className="flex items-center gap-x-1">
                    <span>{email}</span>
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center focus:outline-none hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      title={copied ? "Copied!" : "Copy to clipboard"}
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex space-x-2 items-center pt-2">
                  <SocialMidia
                    name="GitHub"
                    link="https://www.github.com/wfabi0"
                  />
                  <div className="h-1 w-1 bg-black dark:bg-white rounded-full" />
                  <SocialMidia
                    name="LinkedIn"
                    link="https://www.linkedin.com/in/wfabi0/"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2 md:ml-4 flex justify-center">
                <img
                  src={imageUrl}
                  alt="Fábio Milagres"
                  className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-44 xl:h-44 object-cover"
                />
              </div>
            </div>

            {/* <div className="pt-4 border-t border-gray-400 dark:border-gray-700">
              <div className="flex items-center gap-x-2 font-[700] text-[1.3rem]">
                <Bot className="h-5 w-5" />
                <h2>{t("technologies")}</h2>
              </div>
              <div className="mt-2">
                <div className="flex flex-col border-gray-400 dark:border-gray-700 border-l-2 pl-3 gap-y-1">
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <a
                        key={index}
                        className="dark:text-gray-200 dark:border-gray-200 font-semibold transition duration-300 border-2 p-1 rounded-lg bg-gray-200 dark:bg-zinc-700 cursor-default hover:bg-gray-400 dark:hover:bg-gray-600"
                      >
                        {tech}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}

            <div className="pt-4 border-t border-gray-400 dark:border-gray-700">
              <div className="flex items-center gap-x-2 font-[700] text-[1.3rem]">
                <GraduationCap className="h-5 w-5" />
                <h2>{t("education")}</h2>
              </div>
              <div className="flex flex-col gap-y-4 mt-3">
                <div className="flex gap-x-2 items-center">
                  <a href={t("formation1.link")}>
                    <img
                      src={t("formation1.image")}
                      className="h-6 w-6 object-cover"
                    />
                  </a>
                  <a
                    href={t("formation1.link")}
                    className="font-bold uppercase hover:underline"
                  >
                    {t("formation1.institution")}
                  </a>
                </div>
                <div className="flex flex-col border-gray-400 dark:border-gray-700 border-l-2 pl-3">
                  <div className="flex space-x-1 items-center">
                    <p className="font-semibold">
                      {t("formation1.title")}{" "}
                      <a className="text-gray-700 font-normal text-lg dark:text-gray-400">
                        {t("formation1.start")} - {t("formation1.end")}
                      </a>
                    </p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {t("formation1.description")}
                  </div>
                  {(
                    t("formation1.projects.items", {
                      returnObjects: true,
                    }) as []
                  ).length > 0 && (
                    <div className="flex gap-x-1 items-center font-semibold py-1">
                      <Code className="h-5 w-5" />
                      {t("formation1.projects.title")}
                    </div>
                  )}

                  <div>
                    {(
                      t("formation1.projects.items", {
                        returnObjects: true,
                      }) as ProjectItem[]
                    ).map((project, index) => (
                      <div
                        key={index}
                        className="flex flex-row pl-3 border-l-2 space-x-1 border-gray-400 dark:border-gray-700"
                      >
                        <div>
                          <div className="flex space-x-1">
                            <a href={project.link}>
                              <img
                                className="h-6 w-6 rounded-full"
                                src={project.link + ".png"}
                              />
                            </a>
                            <a
                              href={project.link}
                              className="font-medium hover:underline"
                            >
                              {project.title}
                            </a>
                          </div>
                          <div className="text-gray-600 dark:text-gray-300">
                            {project.description}
                          </div>
                          <div>
                            <a className="cursor-default">
                              {t("technologies")}
                            </a>
                            :{" "}
                            <a className="text-gray-600 dark:text-gray-300">
                              {project.technologies
                                .sort()
                                .map((tech, iTech, arr) => (
                                  <>
                                    <a
                                      key={iTech}
                                      className="cursor-pointer hover:text-black dark:hover:text-white transition"
                                    >
                                      {tech}
                                    </a>
                                    {iTech < arr.length - 1 && ", "}
                                  </>
                                ))}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-400 dark:border-gray-700">
              <div className="flex items-center gap-x-2 font-[700] text-[1.3rem]">
                <Laptop className="h-5 w-5" />
                <h2>{t("personal_projects.title")}</h2>
              </div>
              {(
                t("personal_projects.items", {
                  returnObjects: true,
                }) as PersonalProject[]
              ).map((project, index) => {
                const IconComponent = iconMap[project.icon];
                return (
                  <div key={index} className="mt-2">
                    <div className="flex flex-col border-gray-400 dark:border-gray-700 border-l-2 pl-3 gap-y-1">
                      <div className="flex space-x-1 items-center">
                        <a href={project.link}>
                          {IconComponent && (
                            <IconComponent className={`h-4 w-4 transition`} />
                          )}
                        </a>
                        <a
                          href={project.link}
                          className="font-semibold hover:underline transition"
                        >
                          {project.title}
                        </a>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </div>
                      <div>
                        <a className="cursor-default">{t("technologies")}</a>:{" "}
                        <a className="text-gray-600 dark:text-gray-300">
                          {project.technologies
                            .sort()
                            .map((tech, iTech, arr) => (
                              <>
                                <a
                                  key={iTech}
                                  className="cursor-pointer hover:text-black dark:hover:text-white transition"
                                >
                                  {tech}
                                </a>
                                {iTech < arr.length - 1 && ", "}
                              </>
                            ))}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
