import { useState } from "react";

import {
  Home,
  Trophy,
  Swords,
  Wallet,
  User,
  Bell,
  Menu,
  X,
  ChevronRight,
  Clock3,
  Users,
  ShieldCheck,
  Plus,
  ArrowUpRight,
  Search,
  Settings,
  LifeBuoy
} from "lucide-react";

const tournaments = [
  {
    id: 1,
    name: "MEGA FREE FIRE CHAMPIONSHIP",
    game: "Free Fire",
    mode: "BR Squad",
    map: "Bermuda",
    entry: 49,
    prize: 200000,
    players: 120,
    maxPlayers: 144,
    date: "12 SEP 2026",
    time: "08:00 PM",
    status: "REGISTRATION OPEN"
  },
  {
    id: 2,
    name: "NIGHT HUNT CUP",
    game: "Free Fire",
    mode: "BR Squad",
    map: "Purgatory",
    entry: 29,
    prize: 75000,
    players: 88,
    maxPlayers: 96,
    date: "13 SEP 2026",
    time: "10:00 PM",
    status: "STARTING SOON"
  },
  {
    id: 3,
    name: "CLASH SQUAD ELITE",
    game: "Free Fire",
    mode: "Clash Squad",
    map: "Random",
    entry: 19,
    prize: 40000,
    players: 64,
    maxPlayers: 64,
    date: "14 SEP 2026",
    time: "07:30 PM",
    status: "FULL"
  }
];

function Logo() {
  return (
    <div className="logo">
      <img
        src="/assets/logo.png"
        alt="GAMER eSPORTS"
      />

      <div className="logo-text">
        <strong>GAMER</strong>
        <span>eSPORTS</span>
      </div>
    </div>
  );
}

function Sidebar({ page, setPage }) {
  const items = [
    ["home", "Home", Home],
    ["tournaments", "Tournaments", Trophy],
    ["matches", "My Matches", Swords],
    ["wallet", "Wallet", Wallet],
    ["profile", "Profile", User]
  ];

  return (
    <aside className="sidebar">

      <Logo />

      <div className="nav-label">
        MAIN MENU
      </div>

      <nav>
        {items.map(
          ([id, label, Icon]) => (
            <button
              key={id}
              className={
                page === id
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => setPage(id)}
            >
              <Icon size={19} />
              <span>{label}</span>
            </button>
          )
        )}
      </nav>

      <div className="sidebar-bottom">

        <button
          className="nav-item"
          onClick={() => setPage("support")}
        >
          <LifeBuoy size={19} />
          <span>Support</span>
        </button>

        <button
          className="nav-item"
          onClick={() => setPage("settings")}
        >
          <Settings size={19} />
          <span>Settings</span>
        </button>

      </div>

    </aside>
  );
}

function Topbar({ setPage }) {
  return (
    <header className="topbar">

      <div className="mobile-logo">
        <Logo />
      </div>

      <div className="topbar-search">
        <Search size={17} />

        <input
          placeholder="Search tournaments..."
        />
      </div>

      <div className="topbar-actions">

        <button
          className="icon-button"
          onClick={() =>
            setPage("notifications")
          }
        >
          <Bell size={19} />

          <span className="notification-dot" />
        </button>

        <button
          className="user-mini"
          onClick={() => setPage("profile")}
        >
          <img
            src="/assets/logo.png"
            alt=""
          />

          <div>
            <strong>GAMER_BD</strong>
            <span>GME-100492</span>
          </div>
        </button>

      </div>

    </header>
  );
}

function BottomNav({ page, setPage }) {
  const items = [
    ["home", "Home", Home],
    ["tournaments", "Tournaments", Trophy],
    ["matches", "Matches", Swords],
    ["wallet", "Wallet", Wallet],
    ["profile", "Profile", User]
  ];

  return (
    <nav className="bottom-nav">

      {items.map(
        ([id, label, Icon]) => (
          <button
            key={id}
            className={
              page === id
                ? "bottom-item active"
                : "bottom-item"
            }
            onClick={() => setPage(id)}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        )
      )}

    </nav>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        <Icon size={20} />
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

    </div>
  );
}

function TournamentCard({
  tournament,
  onOpen
}) {
  const remaining =
    tournament.maxPlayers -
    tournament.players;

  return (
    <article className="tournament-card">

      <div className="tournament-art">

        <div className="art-lines" />

        <img
          src="/assets/logo.png"
          alt=""
        />

        <span className="status-badge">
          {tournament.status}
        </span>

      </div>

      <div className="tournament-body">

        <div className="game-label">
          {tournament.game}
          <span>•</span>
          {tournament.mode}
        </div>

        <h3>{tournament.name}</h3>

        <div className="money-row">

          <div>
            <span>ENTRY</span>
            <strong>
              ₹{tournament.entry}
            </strong>
          </div>

          <div>
            <span>PRIZE POOL</span>
            <strong>
              ₹{tournament.prize.toLocaleString(
                "en-IN"
              )}
            </strong>
          </div>

        </div>

        <div className="card-info">

          <span>
            <Clock3 size={14} />
            {tournament.date}
          </span>

          <span>
            <Users size={14} />
            {tournament.players}/
            {tournament.maxPlayers}
          </span>

        </div>

        <div className="slot-bar">
          <div
            style={{
              width:
                `${(
                  tournament.players /
                  tournament.maxPlayers
                ) * 100}%`
            }}
          />
        </div>

        <div className="slot-text">
          {remaining > 0
            ? `${remaining} slots remaining`
            : "Tournament full"}
        </div>

        <button
          className="outline-button"
          onClick={() => onOpen(tournament)}
        >
          VIEW DETAILS
          <ChevronRight size={16} />
        </button>

      </div>

    </article>
  );
}

function Home({ setPage, openTournament }) {
  return (
    <main className="page">

      <section className="hero">

        <div className="hero-grid" />

        <div className="hero-content">

          <span className="eyebrow">
            GAMER eSPORTS • FEATURED EVENT
          </span>

          <h1>
            MEGA FREE FIRE
            <br />

            <strong>
              CHAMPIONSHIP
            </strong>
          </h1>

          <p>
            Enter the arena. Build your squad.
            Compete for the crown.
          </p>

          <div className="hero-meta">

            <div>
              <span>PRIZE POOL</span>
              <strong>₹2,00,000</strong>
            </div>

            <div>
              <span>ENTRY</span>
              <strong>₹49</strong>
            </div>

            <div>
              <span>PLAYERS</span>
              <strong>144</strong>
            </div>

          </div>

          <button
            className="primary-button"
            onClick={() =>
              openTournament(tournaments[0])
            }
          >
            JOIN NOW
            <ArrowUpRight size={18} />
          </button>

        </div>

        <div className="hero-brand">

          <div className="hero-ring" />

          <img
            src="/assets/logo.png"
            alt="GAMER eSPORTS"
          />

        </div>

      </section>


      <div className="stats-grid">

        <StatCard
          icon={Wallet}
          label="Wallet Balance"
          value="₹1,240"
        />

        <StatCard
          icon={Swords}
          label="Matches Played"
          value="42"
        />

        <StatCard
          icon={Trophy}
          label="Tournament Wins"
          value="7"
        />

        <StatCard
          icon={ShieldCheck}
          label="Player Level"
          value="18"
        />

      </div>


      <section className="section">

        <div className="section-heading">

          <div>
            <span>COMPETE</span>
            <h2>Upcoming Tournaments</h2>
          </div>

          <button
            className="text-button"
            onClick={() =>
              setPage("tournaments")
            }
          >
            VIEW ALL
            <ChevronRight size={16} />
          </button>

        </div>

        <div className="tournament-grid">

          {tournaments.map(
            tournament => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                onOpen={openTournament}
              />
            )
          )}

        </div>

      </section>


      <section className="announcement">

        <div className="announcement-icon">
          <Bell size={21} />
        </div>

        <div>
          <span>ANNOUNCEMENT</span>

          <strong>
            Room credentials will be released
            before your match.
          </strong>

          <p>
            Keep notifications enabled to receive
            Room ID and password updates.
          </p>
        </div>

      </section>

    </main>
  );
}

function TournamentDetails({
  tournament,
  setPage
}) {
  return (
    <main className="page">

      <button
        className="back-button"
        onClick={() => setPage("tournaments")}
      >
        ← BACK TO TOURNAMENTS
      </button>

      <section className="details-hero">

        <div className="details-art">

          <img
            src="/assets/logo.png"
            alt=""
          />

        </div>

        <div className="details-info">

          <span className="eyebrow">
            {tournament.status}
          </span>

          <h1>{tournament.name}</h1>

          <p>
            {tournament.game} •{" "}
            {tournament.mode} •{" "}
            {tournament.map}
          </p>

          <div className="detail-money">

            <div>
              <span>ENTRY FEE</span>
              <strong>
                ₹{tournament.entry}
              </strong>
            </div>

            <div>
              <span>PRIZE POOL</span>
              <strong>
                ₹{tournament.prize.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

          </div>

          <button
            className="primary-button"
            onClick={() =>
              alert(
                "Join flow will be connected to Firebase in Phase 2."
              )
            }
          >
            JOIN NOW
            <ArrowUpRight size={18} />
          </button>

        </div>

      </section>


      <div className="detail-grid">

        <div className="panel">

          <h2>TOURNAMENT INFORMATION</h2>

          <div className="info-list">

            <div>
              <span>DATE</span>
              <strong>{tournament.date}</strong>
            </div>

            <div>
              <span>TIME</span>
              <strong>{tournament.time}</strong>
            </div>

            <div>
              <span>GAME MODE</span>
              <strong>{tournament.mode}</strong>
            </div>

            <div>
              <span>MAP</span>
              <strong>{tournament.map}</strong>
            </div>

            <div>
              <span>MAX PLAYERS</span>
              <strong>{tournament.maxPlayers}</strong>
            </div>

            <div>
              <span>JOINED</span>
              <strong>{tournament.players}</strong>
            </div>

          </div>

        </div>

        <div className="panel">

          <h2>PRIZE DISTRIBUTION</h2>

          <div className="prize-list">

            <div>
              <span>1ST PLACE</span>
              <strong>₹1,00,000</strong>
            </div>

            <div>
              <span>2ND PLACE</span>
              <strong>₹50,000</strong>
            </div>

            <div>
              <span>3RD PLACE</span>
              <strong>₹25,000</strong>
            </div>

            <div>
              <span>OTHERS</span>
              <strong>₹25,000</strong>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

function Placeholder({ title, icon: Icon }) {
  return (
    <main className="page">

      <div className="empty-page">

        <div className="empty-icon">
          <Icon size={30} />
        </div>

        <span>GAMER eSPORTS</span>

        <h1>{title}</h1>

        <p>
          This module is ready for the next
          development phase.
        </p>

        <button
          className="primary-button"
          onClick={() => {}}
        >
          COMING SOON
        </button>

      </div>

    </main>
  );
}

export default function App() {

  const [page, setPage] =
    useState("home");

  const [selectedTournament, setSelectedTournament] =
    useState(null);

  const openTournament =
    tournament => {
      setSelectedTournament(tournament);
      setPage("details");
    };

  const renderPage = () => {

    if (
      page === "details" &&
      selectedTournament
    ) {
      return (
        <TournamentDetails
          tournament={selectedTournament}
          setPage={setPage}
        />
      );
    }

    if (page === "home") {
      return (
        <Home
          setPage={setPage}
          openTournament={openTournament}
        />
      );
    }

    const map = {
      tournaments: [
        "Tournament List",
        Trophy
      ],
      matches: [
        "My Matches",
        Swords
      ],
      wallet: [
        "Wallet",
        Wallet
      ],
      profile: [
        "Profile",
        User
      ],
      notifications: [
        "Notifications",
        Bell
      ],
      support: [
        "Support",
        LifeBuoy
      ],
      settings: [
        "Settings",
        Settings
      ]
    };

    const data = map[page];

    if (data) {
      return (
        <Placeholder
          title={data[0]}
          icon={data[1]}
        />
      );
    }

    return (
      <Home
        setPage={setPage}
        openTournament={openTournament}
      />
    );
  };

  return (
    <div className="app">

      <Sidebar
        page={page}
        setPage={setPage}
      />

      <div className="main-area">

        <Topbar
          setPage={setPage}
        />

        {renderPage()}

      </div>

      <BottomNav
        page={page}
        setPage={setPage}
      />

    </div>
  );
      }
