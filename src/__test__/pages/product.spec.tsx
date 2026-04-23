import { render, screen } from "@testing-library/react"
import HalamanProduk from "@/pages/produk"
import { TombolBantuan } from "@/components/TombolBantuan"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({ data: { data: [] }, isLoading: false })
}))

describe("Tugas Praktikum Unit Testing", () => {
  it("renders product page correctly", () => {
    const page = render(<HalamanProduk />)
    
    expect(screen.getByTestId("title").textContent).toBe("Product Page")
    expect(page).toMatchSnapshot()
  })

  it("renders komponen TombolBantuan correctly", () => {
    render(<TombolBantuan label="Simpan" />)
    const button = screen.getByTestId("btn-bantuan")
    expect(button.textContent).toBe("Simpan")
  })
})