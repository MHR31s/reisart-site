import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B11]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Reisart" width={56} height={56} />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-white">
                  Reisart
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#9AA8B6]">
                  Marketing Digital
                </p>
              </div>
            </div>

            <p className="premium-copy mt-6 max-w-md text-base leading-7 text-[#9AA8B6]">
              Consultoria estratégica para empresas locais que querem crescer
              com posicionamento, autoridade e previsibilidade comercial.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Navegação</h4>
            <div className="mt-5 space-y-3">
              <Link href="/servicos" className="block text-[#9AA8B6] hover:text-[#F4C76B]">
                Serviços
              </Link>
              <Link href="/#planos" className="block text-[#9AA8B6] hover:text-[#F4C76B]">
                Planos
              </Link>
              <Link href="/#metodo" className="block text-[#9AA8B6] hover:text-[#F4C76B]">
                Método
              </Link>
              <Link href="/cases" className="block text-[#9AA8B6] hover:text-[#F4C76B]">
                Cases
              </Link>
              <Link href="/diagnostico" className="block text-[#9AA8B6] hover:text-[#F4C76B]">
                Diagnóstico
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Contato</h4>
            <div className="mt-5 space-y-3 text-[#9AA8B6]">
              <p>(19) 99139-2850</p>
              <p>@reisartmkd</p>
              <p>reisartmkd.com.br</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-[#6F7D8B]">
          © 2026 Reisart Marketing Digital. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
