import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function NavbarComponent() {
  return (
    <Navbar shouldHideOnScroll>

      <NavbarContent className="hidden sm:flex gap-10 justify-start" >

        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/user">
            User
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/pelangan">
            Pelangggan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/mitra">
            Mitra
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="Jasa">
            Jasa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="Kategori">
            Kategori
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="Transaksi">
            Transaksi
          </Link>
        </NavbarItem>

      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}


// export default function App() {
//   return (
//     <Navbar className="justify-start" isBordered>
//       <NavbarContent className="hidden sm:flex gap-11 pl-10"  justify="center" >
//         <NavbarItem isActive>
//           <Link aria-current="page" color="foreground" href="#">
//             User
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" href="#">
//             Pelanggan
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" color="foreground" href="#">
//             Penyedia Jasa
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" color="foreground" href="#">
//             Jasa
//           </Link>
//         </NavbarItem>   
//         <NavbarItem isActive>
//           <Link aria-current="page" color="foreground" href="#">
//             Kategori
//           </Link>
//         </NavbarItem>   
//         <NavbarItem >
//           <Link aria-current="page" color="foreground" href="#">
//             Transaksi
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
