import Image from "next/image";
import { clientsData } from "@/Data/clientsData";

export default function Clients() {
  return (
    <section className="clients">
      <h3 className="h2 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">
        {clientsData.map((client, index) => (
          <li className="clients-item" key={index}>
            <a href={client.link}>
              <Image
                src={client.logo}
                alt={client.alt}
                width={120}
                height={60}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
