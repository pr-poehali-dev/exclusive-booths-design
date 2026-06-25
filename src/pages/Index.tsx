import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

const SERVICES = [
  {
    icon: 'PenTool',
    title: 'Дизайн концепции',
    text: 'Создаём уникальный образ стенда, который выделит вас среди сотен конкурентов на выставке.',
  },
  {
    icon: 'Ruler',
    title: 'Проектирование',
    text: 'Точные 3D-модели и инженерные расчёты — вы видите результат ещё до начала стройки.',
  },
  {
    icon: 'Hammer',
    title: 'Строительство',
    text: 'Собственное производство и монтаж под ключ в срок, на любой площадке страны и мира.',
  },
  {
    icon: 'Sparkles',
    title: 'Брендинг и свет',
    text: 'Интерактивные зоны, LED-экраны и сценический свет, которые притягивают посетителей.',
  },
];

const PORTFOLIO = [
  {
    img: 'https://cdn.poehali.dev/projects/5019c710-3b94-42b5-a2a0-b5034193134f/files/302d6a33-801f-475f-98b3-84441ebe5991.jpg',
    title: 'TECHNO EXPO',
    tag: 'Двухуровневый стенд · 120 м²',
  },
  {
    img: 'https://cdn.poehali.dev/projects/5019c710-3b94-42b5-a2a0-b5034193134f/files/f77e0e03-efa7-4577-b6b7-f88b1e963627.jpg',
    title: 'PRIME FORUM',
    tag: 'Корпоративный · 90 м²',
  },
  {
    img: 'https://cdn.poehali.dev/projects/5019c710-3b94-42b5-a2a0-b5034193134f/files/196535b5-7f8a-4371-8ed0-ad5c5057d974.jpg',
    title: 'NOVA LAUNCH',
    tag: 'Интерактивный · 60 м²',
  },
];

const STATS = [
  { value: '320+', label: 'Стендов построено' },
  { value: '14', label: 'Лет на рынке' },
  { value: '47', label: 'Городов и стран' },
  { value: '98%', label: 'Клиентов возвращаются' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="#home" className="font-display text-2xl font-700 tracking-tight">
            EXPO<span className="text-primary">FORM</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-500 text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button className="hidden md:inline-flex font-display tracking-wide" asChild>
            <a href="#contacts">ОБСУДИТЬ ПРОЕКТ</a>
          </Button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <nav className="container flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-base font-500 text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <Button className="mt-2 font-display" asChild>
                <a href="#contacts" onClick={() => setMenuOpen(false)}>ОБСУДИТЬ ПРОЕКТ</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 grid-texture opacity-70" />
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-secondary/20 blur-[120px]" />

        <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-muted-foreground animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Дизайн · Проектирование · Строительство
            </div>
            <h1
              className="font-display text-5xl font-700 uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Эксклюзивные
              <br />
              <span className="text-gradient">выставочные</span>
              <br />
              стенды
            </h1>
            <p
              className="mt-6 max-w-md text-lg text-muted-foreground animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Стенд для наших клиентов — это путь к новым контрактам. Создаём пространства,
              которые продают.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button size="lg" className="font-display tracking-wide glow-primary" asChild>
                <a href="#portfolio">
                  СМОТРЕТЬ ПОРТФОЛИО
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-display tracking-wide" asChild>
                <a href="#services">УСЛУГИ</a>
              </Button>
            </div>
          </div>

          <div
            className="relative animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            <div className="overflow-hidden rounded-2xl border border-border glow-primary">
              <img
                src="https://cdn.poehali.dev/projects/5019c710-3b94-42b5-a2a0-b5034193134f/files/302d6a33-801f-475f-98b3-84441ebe5991.jpg"
                alt="Эксклюзивный выставочный стенд"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card/90 p-5 backdrop-blur-md">
              <div className="font-display text-3xl font-700 text-primary">320+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                реализованных проектов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-card/40 py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {['ДИЗАЙН', 'ПРОЕКТИРОВАНИЕ', 'ПРОИЗВОДСТВО', 'МОНТАЖ', 'БРЕНДИНГ', 'СВЕТ', 'LED-ЭКРАНЫ'].map((w) => (
                <span key={w} className="font-display text-xl font-600 uppercase tracking-widest text-muted-foreground">
                  {w} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="container py-24 md:py-32">
        <div className="mb-14 max-w-2xl">
          <span className="font-display text-sm font-600 uppercase tracking-[0.3em] text-primary">
            Что мы делаем
          </span>
          <h2 className="mt-4 font-display text-4xl font-700 uppercase leading-tight md:text-5xl">
            Полный цикл создания стенда
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={s.icon} size={26} />
              </div>
              <h3 className="font-display text-xl font-600 uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-5 font-display text-sm font-600 text-primary/60">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-y border-border bg-card/30 py-24 md:py-32">
        <div className="container">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-display text-sm font-600 uppercase tracking-[0.3em] text-primary">
                Портфолио
              </span>
              <h2 className="mt-4 font-display text-4xl font-700 uppercase leading-tight md:text-5xl">
                Проекты, которые работают
              </h2>
            </div>
            <Button variant="outline" className="font-display tracking-wide" asChild>
              <a href="#contacts">
                ВСЕ ПРОЕКТЫ
                <Icon name="ArrowUpRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PORTFOLIO.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-xs uppercase tracking-wider text-primary">{p.tag}</div>
                  <h3 className="mt-1 font-display text-2xl font-700 uppercase">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="font-display text-sm font-600 uppercase tracking-[0.3em] text-primary">
              О нас
            </span>
            <h2 className="mt-4 font-display text-4xl font-700 uppercase leading-tight md:text-5xl">
              Мы строим не стенды,
              <br />
              а <span className="text-gradient">точки притяжения</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              EXPOFORM — команда дизайнеров, инженеров и монтажников с собственным
              производством. Мы превращаем выставочную площадку в инструмент продаж:
              продумываем маршрут гостя, акценты бренда и зоны переговоров.
            </p>
            <p className="mt-4 text-muted-foreground">
              Берём проект под ключ — от первого эскиза до демонтажа после выставки.
              Вы фокусируетесь на клиентах, остальное — наша задача.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {['Собственное производство', 'Работа по всему миру', 'Сроки под ключ'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm font-500">
                  <Icon name="Check" size={18} className="text-primary" />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-7 text-center"
              >
                <div className="font-display text-4xl font-700 text-gradient md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts / CTA */}
      <section id="contacts" className="container pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-700 uppercase leading-tight md:text-5xl">
                Готовы к новым
                <br />
                <span className="text-gradient">контрактам?</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Расскажите о выставке — пришлём концепцию и смету в течение 24 часов.
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:+74950000000" className="flex items-center gap-3 text-lg font-500 hover:text-primary">
                  <Icon name="Phone" size={20} className="text-primary" />
                  +7 (495) 000-00-00
                </a>
                <a href="mailto:hello@expoform.ru" className="flex items-center gap-3 text-lg font-500 hover:text-primary">
                  <Icon name="Mail" size={20} className="text-primary" />
                  hello@expoform.ru
                </a>
                <div className="flex items-center gap-3 text-lg font-500">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  Москва, ул. Выставочная, 1
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground outline-none transition-colors focus:border-primary"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground outline-none transition-colors focus:border-primary"
              />
              <textarea
                rows={4}
                placeholder="О проекте: выставка, площадь, сроки"
                className="w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-foreground outline-none transition-colors focus:border-primary"
              />
              <Button size="lg" className="w-full font-display tracking-wide glow-primary">
                ОТПРАВИТЬ ЗАЯВКУ
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <a href="#home" className="font-display text-xl font-700 tracking-tight text-foreground">
            EXPO<span className="text-primary">FORM</span>
          </a>
          <p>© 2026 EXPOFORM. Эксклюзивные выставочные стенды.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
