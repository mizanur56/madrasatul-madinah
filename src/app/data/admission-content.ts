export type NavigationChild = {
  label: string
  href: string
}

export type NavigationItem = {
  label: string
  href: string
  children?: NavigationChild[]
}

export const navigationItems: NavigationItem[] = [
  { label: "মূল পাতা", href: "/" },
  {
    label: "অভিভাবকের নিয়মাবলী",
    href: "/অভিভাবকের-নিয়মাবলী/মক্তব-বিভাগ",
    children: [
      {
        label: "মক্তব বিভাগ",
        href: "/অভিভাবকের-নিয়মাবলী/মক্তব-বিভাগ",
      },
      {
        label: "কিতাব বিভাগ",
        href: "/অভিভাবকের-নিয়মাবলী/কিতাব-বিভাগ",
      },
    ],
  },
  { label: "দাখেলার আবেদন", href: "/দাখেলার-আবেদন" },
]

export interface ContactDetails {
  hotline: {
    display: string
    dial: string
  }
  applicationUrl: string
}

export const contactDetails: ContactDetails = {
  hotline: {
    display: "০১৮৫৫৯৪৮১০৬",
    dial: "01855948106",
  },
  applicationUrl: "https://mimalmadinah.com",
}
