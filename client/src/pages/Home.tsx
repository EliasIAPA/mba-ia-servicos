import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      
      {/* HEADER */}
      <header className="fixed w-full z-50 top-0 left-0 bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="bg-gradient-to-r from-neon-purple to-neon-pink text-white text-center py-2 text-sm font-bold tracking-wide">
          <div className="container flex justify-between items-center">
            <span className="flex items-center gap-2">
              <i className="fas fa-clock animate-pulse"></i> 
              OFERTA ENCERRA EM: <span className="font-mono bg-black/20 px-2 rounded ml-1">{formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}</span>
            </span>
            <span className="hidden md:inline">Garanta sua vaga com bônus exclusivos</span>
          </div>
        </div>
        <div className="container py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-neon-cyan">FABRANI</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Faculdade Brasileira de Negócios Inovadores</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
            <a href="#grade" className="hover:text-neon-cyan transition-colors">Grade Curricular</a>
            <a href="#diferenciais" className="hover:text-neon-cyan transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-neon-cyan transition-colors">Depoimentos</a>
            <Button asChild className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-bold rounded-full px-6">
              <a href="#inscricao">Inscreva-se</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-32">
        
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-background to-background z-0"></div>
          <div className="container relative z-10 text-center">
            <div className="inline-block border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan px-4 py-1 rounded-full text-sm font-bold mb-8 animate-fade-in-up">
              Vagas Limitadas: Apenas 40 Alunos/Turma
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fade-in-up animation-delay-200">
              O SETOR DE SERVIÇOS FOI REESCRITO.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple">VOCÊ JÁ DOMINA O NOVO CÓDIGO?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
              Transforme-se em <strong className="text-white">Líder Digital do Seu Setor em 6 a 12 Meses</strong> com o Único MBA que Une Gestão de Serviços + IA Aplicada a Bares, Restaurantes, Hotéis e Facilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm md:text-base font-medium animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2"><i className="fas fa-check-circle text-neon-cyan"></i> 100% Prático</div>
              <div className="flex items-center gap-2"><i className="fas fa-check-circle text-neon-cyan"></i> 100% Setorial</div>
              <div className="flex items-center gap-2"><i className="fas fa-check-circle text-neon-cyan"></i> Residência IA Garantida</div>
            </div>

            <Button asChild size="lg" className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all animate-pulse">
              <a href="#inscricao">QUERO DOMINAR IA E GESTÃO AGORA <i className="fas fa-arrow-right ml-2"></i></a>
            </Button>

            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2"><i className="fas fa-star text-yellow-400"></i> Certificação MEC Nota 5</div>
              <div className="flex items-center gap-2"><i className="fas fa-users text-blue-400"></i> +2.5 Mi Alunos Impactados</div>
              <div className="flex items-center gap-2"><i className="fas fa-shield-alt text-green-400"></i> 100% AI-Native</div>
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Verdade Que Ninguém No Seu Setor Te Conta:</h2>
              <h3 className="text-xl md:text-2xl text-neon-pink font-bold">Quem Não Dominar IA + Gestão Profissional Nos Próximos 2 Anos Será Engolido pela Concorrência</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "fa-brain", title: "Paralisia por Informação", text: "Muitas ferramentas, sem saber por onde começar. Concorrentes já estão na frente." },
                { icon: "fa-chart-line", title: "Gestão na Intuição", text: "Decisões baseadas em 'feeling' por falta de dados estruturados." },
                { icon: "fa-cogs", title: "Operação no Caos", text: "Equipe desmotivada, processos desorganizados e você trabalhando 12h/dia." },
                { icon: "fa-money-bill-wave", title: "Custos Descontrolados", text: "CMV alto, desperdício e margem de lucro espremida." },
                { icon: "fa-user-slash", title: "Cliente Invisível", text: "Você não conhece seu cliente e não sabe por que ele te abandonou." },
                { icon: "fa-robot", title: "Concorrência Desleal", text: "Quem usa IA já reduziu custos e aumentou produtividade em 300%." }
              ].map((item, i) => (
                <Card key={i} className="bg-card/50 border-white/5 hover:border-neon-purple/50 transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center text-neon-purple text-2xl mb-4">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
                <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
                  <i className="fas fa-times-circle"></i> SEM IA + GESTÃO
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3"><i className="fas fa-times text-red-500 mt-1"></i> Decisões baseadas em achismos</li>
                  <li className="flex gap-3"><i className="fas fa-times text-red-500 mt-1"></i> Processos manuais e demorados</li>
                  <li className="flex gap-3"><i className="fas fa-times text-red-500 mt-1"></i> Marketing genérico sem personalização</li>
                  <li className="flex gap-3"><i className="fas fa-times text-red-500 mt-1"></i> Desperdício de até 30% em operações</li>
                  <li className="flex gap-3"><i className="fas fa-times text-red-500 mt-1"></i> Crescimento linear (dobrar = dobrar custos)</li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl border border-neon-cyan/50 bg-neon-cyan/5 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                <h3 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i> COM IA + GESTÃO
                </h3>
                <ul className="space-y-4 text-white">
                  <li className="flex gap-3"><i className="fas fa-check text-neon-cyan mt-1"></i> Decisões baseadas em dados em tempo real</li>
                  <li className="flex gap-3"><i className="fas fa-check text-neon-cyan mt-1"></i> Automação de 60% das tarefas operacionais</li>
                  <li className="flex gap-3"><i className="fas fa-check text-neon-cyan mt-1"></i> Marketing hiperpersonalizado em escala</li>
                  <li className="flex gap-3"><i className="fas fa-check text-neon-cyan mt-1"></i> Redução de 40% de desperdício e custos</li>
                  <li className="flex gap-3"><i className="fas fa-check text-neon-cyan mt-1"></i> Crescimento exponencial (escala sem custos)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section id="grade" className="py-20 bg-secondary/20">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              6 Módulos Estratégicos + <span className="text-neon-purple">Residência Setorial</span>
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { title: "Módulo 1: Gestão de Negócios e Serviços", hours: "60h", content: "Gestão e Mindset, Liderança, Processos, Financeiro e CX." },
                { title: "Módulo 2: Fundamentos de IA", hours: "60h", content: "GPT-4, Claude, Engenharia de Prompt, Machine Learning para Executivos." },
                { title: "Módulo 3: IA Aplicada a Negócios", hours: "60h", content: "Marketing, Vendas, RH, Operações e Finanças com IA." },
                { title: "Módulo 4: Estratégia e Governança", hours: "60h", content: "Transformação Digital, Liderança na Era da IA, LGPD e Ética." },
                { title: "Módulo 5: RESIDÊNCIA IA - TRILHA SETORIAL", hours: "60h", content: "Projetos práticos em Bares/Restaurantes, Turismo/Hotelaria ou Facilities." },
                { title: "Módulo 6: RESIDÊNCIA IA - PROJETO FINAL", hours: "60h", content: "Implementação real de um projeto de IA no seu negócio." }
              ].map((mod, i) => (
                <div key={i} className="group relative bg-card border border-white/5 rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-purple group-hover:bg-neon-cyan transition-colors"></div>
                  <div className="p-6 md:flex justify-between items-center gap-6">
                    <div className="flex-1">
                      <div className="text-xs font-bold text-neon-purple mb-1 group-hover:text-neon-cyan">MÓDULO {i+1} • {mod.hours}</div>
                      <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                      <p className="text-muted-foreground text-sm">{mod.content}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <i className="fas fa-chevron-right text-white/20 group-hover:text-neon-cyan transition-colors"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="investimento" className="py-20">
          <div className="container max-w-3xl">
            <div className="bg-card border border-neon-cyan/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(100,20,200,0.2)]">
              <div className="bg-gradient-to-r from-neon-purple to-neon-pink p-2 text-center text-white font-bold text-sm">
                OFERTA EXCLUSIVA DE LANÇAMENTO
              </div>
              <div className="p-8 md:p-12 text-center">
                <div className="text-muted-foreground line-through text-lg mb-2">De R$ 62.100</div>
                <div className="text-sm font-bold text-neon-cyan mb-4">POR APENAS:</div>
                <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                  R$ 8.997
                </div>
                <div className="text-muted-foreground mb-8">ou 12x de R$ 749,75</div>
                
                <div className="inline-block bg-neon-cyan text-black font-bold px-4 py-1 rounded-full text-sm mb-8">
                  Desconto de 86% aplicado
                </div>

                <Button asChild size="lg" className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black font-bold text-xl py-8 rounded-xl shadow-lg hover:shadow-neon-cyan/50 transition-all mb-6">
                  <a href="#inscricao">SIM! QUERO GARANTIR MINHA VAGA AGORA</a>
                </Button>

                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2"><i className="fas fa-users"></i> Apenas 40 vagas por turma</div>
                  <div className="flex items-center justify-center gap-2"><i className="fas fa-gift"></i> Bônus de Consultoria apenas para os 20 primeiros</div>
                  <div className="flex items-center justify-center gap-2"><i className="fas fa-lock"></i> Pagamento 100% Seguro • Garantia de 7 Dias</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="inscricao" className="py-20 bg-secondary/20">
          <div className="container max-w-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Garanta Sua Vaga Agora</h2>
              <p className="text-muted-foreground">Preencha o formulário e nossa equipe entrará em contato.</p>
            </div>
            
            <form className="space-y-4 bg-card p-8 rounded-2xl border border-white/5">
              <div>
                <Input placeholder="Digite seu nome completo" className="bg-background/50 border-white/10 h-12" />
              </div>
              <div>
                <Input type="email" placeholder="seu@email.com" className="bg-background/50 border-white/10 h-12" />
              </div>
              <div>
                <Input type="tel" placeholder="(DDD) 99999-9999" className="bg-background/50 border-white/10 h-12" />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="bg-background/50 border-white/10 h-12">
                    <SelectValue placeholder="Selecione seu cargo..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="socio">Proprietário / Sócio</SelectItem>
                    <SelectItem value="diretor">Diretor / Gerente</SelectItem>
                    <SelectItem value="gestor">Gestor / Supervisor</SelectItem>
                    <SelectItem value="analista">Analista / Coordenador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="bg-background/50 border-white/10 h-12">
                    <SelectValue placeholder="Selecione seu setor..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bares">Bares e Restaurantes</SelectItem>
                    <SelectItem value="turismo">Turismo e Hotelaria</SelectItem>
                    <SelectItem value="facilities">Facilities</SelectItem>
                    <SelectItem value="outro">Outro Setor de Serviços</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black font-bold h-14 text-lg mt-4">
                ENVIAR INSCRIÇÃO AGORA
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Ao enviar, você concorda com nossa <a href="#" className="underline hover:text-neon-cyan">Política de Privacidade</a>.
              </p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-white/10 bg-black text-sm">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-black text-neon-cyan mb-4">FABRANI</div>
              <p className="text-muted-foreground mb-4">A Primeira Faculdade 100% AI-Native do Brasil.</p>
              <div className="flex gap-4 text-lg text-muted-foreground">
                <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@fabrani.com.br</li>
                <li>(XX) XXXX-XXXX</li>
                <li>www.fabrani.com.br</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Institucional</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-neon-cyan">Parceiros</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Responsabilidade Social</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Políticas Anticorrupção</a></li>
                <li><a href="#" className="hover:text-neon-cyan">Trabalhe Conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Certificações</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-neon-cyan"></i> Reconhecido pelo MEC</li>
                <li className="flex items-center gap-2"><i className="fas fa-shield-alt text-neon-cyan"></i> Garantia de 7 Dias</li>
                <li className="flex items-center gap-2"><i className="fas fa-lock text-neon-cyan"></i> Pagamento Seguro</li>
              </ul>
            </div>
          </div>
          <div className="container mt-12 pt-8 border-t border-white/5 text-center text-muted-foreground text-xs">
            © 2026 FABRANI. Todos os direitos reservados. Codificando o Futuro da Educação.
          </div>
        </footer>

      </main>
    </div>
  );
}
