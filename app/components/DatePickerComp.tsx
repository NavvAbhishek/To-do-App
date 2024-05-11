import { Datepicker } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customeTheme: CustomFlowbiteTheme = {
  datepicker: {
    root: {
      base: "relative",
      input:{
       addon:'text-purple',
       field:{
        icon:{
          svg:'text-purple dark:text-yellow h-6 w-6'
        },
        input:{
          withIcon:{
            on:'pl-10 text-purple dark:text-yellow'
          }
        }
       }
      }
    },
    popup: {
      header: {
        base: "",
        title:
          "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        selectors: {
          base: "mb-2 flex justify-between",
          button: {
            base: "text-purple dark:text-yellow rounded-lg bg-white px-5 py-2.5 text-sm font-semibold  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple dark:bg-gray-700  dark:hover:bg-gray-600",
            prev: "",
            next: "",
            view: "",
          },
        },
      },
      footer: {
        base: "mt-2 flex space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-pink",
          today:
            "bg-pink text-white hover:bg-purple dark:bg-cyan-600 dark:hover:bg-cyan-700",
          clear:
            "border border-gray-300 bg-white text-purple hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "mb-1 grid grid-cols-7",
          title:
            "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
            selected: "bg-pink text-white hover:bg-purple",
            disabled: "text-gray-500",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-pink text-white hover:bg-purple",
            disabled: "text-gray-500",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-pink text-white hover:bg-purple",
            disabled: "text-gray-500",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-pink text-white hover:bg-purple",
            disabled: "text-gray-500",
          },
        },
      },
    },
  },
};

export default function DatePickerComp() {
  return (
    <Flowbite theme={{ theme: customeTheme }}>
      <Datepicker />
    </Flowbite>
  );
}

DatePickerComp;
