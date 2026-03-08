'use client'

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar'
import { Button } from '@heroui/button'
import { Kbd } from '@heroui/kbd'
import { Link } from '@heroui/link'
import { Input } from '@heroui/input'
import { link as linkStyles } from '@heroui/theme'
import NextLink from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import {
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  HomeIcon,
} from '@/components/icons'

export const Navbar = () => {
  const router = useRouter()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
      router.push('/login')
      router.refresh()
    }
  }

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-azul3/80 h-16 backdrop-blur-md border-b border-azul1/30"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground', size: 'lg' }),
                  'data-[active=true]:text-azul1 font-bold',
                )}
                color="foreground"
                href={item.href}
              >
                <HomeIcon /> {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
            onPress={handleLogout}
          >
            Sair
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem>
            <Link
              color="danger"
              className="w-full cursor-pointer"
              onPress={handleLogout}
              size="lg"
            >
              Sair
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
