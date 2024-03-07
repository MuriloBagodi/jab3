import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });
const img = styled.div`
  width: 200px;
  height: 100px;
  background: url("/Logo.png");
  background-size: cover;
`;

export default function Home() {
  return <main></main>;
}
