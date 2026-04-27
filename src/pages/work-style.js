import React, { useEffect, useMemo, useState } from "react"

import { Layout, Content } from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/base.scss"
import "../css/work-style.scss"

const SECTIONS = [
  {
    title: "What I believe I can contribute to a team",
    statements: {
      a: "I quickly spot and seize new opportunities.",
      b: "I work well with people of very different kinds.",
      c: "Generating ideas is one of my natural talents.",
      d: "I attract people who can contribute something valuable to the group's goals.",
      e: "My follow-through makes me effective.",
      f: "I am willing to face temporary unpopularity if it leads to worthwhile results.",
      g: "I quickly sense what will work in familiar situations.",
      h: "I present reasoned alternatives without bias.",
      i: "My general and specific feedback is always well received.",
    },
  },
  {
    title: "If I have a shortcoming when working in a team, it is that…",
    statements: {
      a: "I am uneasy when meetings are not well organised and led.",
      b: "I am too generous with people who hold valid views that haven't been considered.",
      c: "I talk too much when the group discusses new ideas.",
      d: "My objectivity makes it hard for me to join my colleagues with enthusiasm.",
      e: "I'm sometimes seen as forceful and authoritarian when something needs to get done.",
      f: "I find it hard to take the lead; I react strongly to the mood of the group.",
      g: "I get caught up in my own ideas and lose touch with what's going on.",
      h: "I'm seen as overly concerned with details and with things going wrong.",
      i: "I struggle to contribute unless the topic is something I know well.",
    },
  },
  {
    title: "When working with others on a project",
    statements: {
      a: "I influence people without putting pressure on them.",
      b: "My general vigilance prevents oversights and careless errors.",
      c: "I push for action so the group doesn't lose sight of its goal.",
      d: "I always bring something original.",
      e: "I back any good suggestion that serves the broader interest.",
      f: "I am keen to find the latest ideas and developments.",
      g: "Others appreciate my ability to judge things coolly.",
      h: "I can be trusted to make sure the essential work is organised.",
      i: "I always behave as a true professional.",
    },
  },
  {
    title: "My characteristic approach to teamwork is",
    statements: {
      a: "I'm interested in getting to know my colleagues better.",
      b: "I'm not afraid to challenge others' views or defend my own when I'm in the minority.",
      c: "I can find arguments to refute proposals I don't think are sound.",
      d: "I have a knack for making things work once a plan is in motion.",
      e: "I avoid the obvious and put forward the unexpected.",
      f: "I bring a touch of perfectionism to any task.",
      g: "I make use of contacts I have outside the group.",
      h: "I form my own view when deciding, even after listening to all opinions.",
      i: "I contribute when I really know the topic.",
    },
  },
  {
    title: "I get satisfaction from my work because",
    statements: {
      a: "I enjoy analysing situations and weighing options.",
      b: "I'm interested in finding practical solutions.",
      c: "I like to foster good working relationships.",
      d: "I can have a strong influence on decisions.",
      e: "I enjoy meeting people who offer something new.",
      f: "I get colleagues to agree on what action to take.",
      g: "I feel in my element when I can give my full attention to a task.",
      h: "I like to find areas that stretch my imagination.",
      i: "I feel that I'm using my strengths and training to improve.",
    },
  },
  {
    title: "If I were suddenly given a difficult task with people I don't know",
    statements: {
      a: "I'd retreat to a corner to think through how to tackle it.",
      b: "I'd team up with whoever had the most positive outlook, even if their personality is difficult.",
      c: "I'd cut the task down to size by working out each person's best contribution.",
      d: "My sense of urgency would make sure we didn't fall behind.",
      e: "I'd stay calm and think clearly.",
      f: "I'd hold firm to my goals despite pressure.",
      g: "I'd take the initiative if the group wasn't making progress.",
      h: "I'd open up discussion to find new ideas.",
      i: "I'd read up on the topic as much as I could.",
    },
  },
  {
    title: "Problems I tend to run into when working in a group",
    statements: {
      a: "I get impatient with people who slow things down.",
      b: "I'm criticised for being too analytical and not intuitive enough.",
      c: "My drive to get things done well can hold the group back.",
      d: "I get bored easily and rely on others to keep me stimulated.",
      e: "I find it hard to get going if the goals aren't clear.",
      f: "I'm clumsy at explaining the complex ideas that come to me.",
      g: "I ask others for things I can't do myself.",
      h: "I hesitate to defend my views in the face of real opposition.",
      i: "I think I'm wasting my time and that I'd do better on my own.",
    },
  },
]

// Section-by-section letter that maps to each role.
// Order: [section1, section2, ..., section7]
const ROLES = [
  {
    abbr: "PL",
    name: "Plant",
    family: "Thinking",
    letters: ["c", "g", "d", "e", "h", "a", "f"],
    bands: [4, 8, 12, 29],
    average: 7.3,
  },
  {
    abbr: "ME",
    name: "Monitor Evaluator",
    family: "Thinking",
    letters: ["h", "d", "g", "c", "a", "e", "b"],
    bands: [5, 9, 12, 19],
    average: 8.2,
  },
  {
    abbr: "SP",
    name: "Specialist",
    family: "Thinking",
    letters: ["i", "i", "i", "i", "i", "i", "i"],
    bands: [4, 7, 12, 29],
    average: 5.6,
  },
  {
    abbr: "SH",
    name: "Shaper",
    family: "Action",
    letters: ["f", "e", "c", "b", "d", "g", "a"],
    bands: [8, 13, 17, 36],
    average: 11.6,
  },
  {
    abbr: "IM",
    name: "Implementer",
    family: "Action",
    letters: ["g", "a", "h", "d", "b", "f", "e"],
    bands: [6, 11, 16, 23],
    average: 10.0,
  },
  {
    abbr: "CF",
    name: "Completer-Finisher",
    family: "Action",
    letters: ["e", "h", "b", "f", "g", "d", "c"],
    bands: [3, 6, 9, 17],
    average: 5.5,
  },
  {
    abbr: "CO",
    name: "Coordinator",
    family: "Social",
    letters: ["d", "b", "a", "h", "f", "c", "g"],
    bands: [6, 10, 13, 18],
    average: 8.8,
  },
  {
    abbr: "TW",
    name: "Teamworker",
    family: "Social",
    letters: ["b", "f", "e", "a", "c", "b", "h"],
    bands: [8, 12, 16, 25],
    average: 10.9,
  },
  {
    abbr: "RI",
    name: "Resource Investigator",
    family: "Social",
    letters: ["a", "c", "f", "g", "e", "h", "d"],
    bands: [6, 9, 11, 21],
    average: 7.8,
  },
]

const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

const emptySection = () =>
  LETTERS.reduce((acc, l) => ({ ...acc, [l]: "" }), {})

const emptyAnswers = () => SECTIONS.map(() => emptySection())

const toInt = (v) => {
  if (v === "" || v === null || v === undefined) return 0
  const n = parseInt(v, 10)
  return Number.isNaN(n) ? 0 : n
}

const sectionSum = (section) =>
  LETTERS.reduce((acc, l) => acc + toInt(section[l]), 0)

const classify = (total, [lowMax, medMax, highMax]) => {
  if (total <= lowMax) return { label: "Low", key: "low" }
  if (total <= medMax) return { label: "Medium", key: "med" }
  if (total <= highMax) return { label: "High", key: "high" }
  return { label: "Very high", key: "vhigh" }
}

const computeRoleResults = (answers) =>
  ROLES.map((role) => {
    const total = role.letters.reduce(
      (sum, letter, idx) => sum + toInt(answers[idx][letter]),
      0
    )
    const range = classify(total, role.bands)
    return { ...role, total, range }
  })

// Agusti's own results, used as a comparison baseline at the end of the page.
const AGUSTI_ANSWERS = [
  { a: "3", b: "1", c: "3", d: "", e: "", f: "", g: "3", h: "", i: "" },
  { a: "2", b: "0", c: "", d: "1", e: "2", f: "2", g: "", h: "3", i: "" },
  { a: "", b: "", c: "2", d: "", e: "3", f: "", g: "2", h: "2", i: "1" },
  { a: "3", b: "", c: "", d: "", e: "", f: "3", g: "1", h: "", i: "3" },
  { a: "4", b: "4", c: "", d: "", e: "", f: "", g: "", h: "", i: "2" },
  { a: "", b: "", c: "5", d: "", e: "", f: "", g: "1", h: "3", i: "1" },
  { a: "", b: "3", c: "", d: "", e: "3", f: "1", g: "1", h: "2", i: "0" },
]
const AGUSTI_ROLE_RESULTS = computeRoleResults(AGUSTI_ANSWERS)

const STORAGE_KEY = "work_style_last_answers"

const isValidStoredAnswers = (parsed) =>
  Array.isArray(parsed) &&
  parsed.length === SECTIONS.length &&
  parsed.every(
    (s) =>
      s &&
      typeof s === "object" &&
      LETTERS.every((l) => l in s)
  )

const WorkStylePage = ({ location }) => {
  const [answers, setAnswers] = useState(emptyAnswers)
  const [showResults, setShowResults] = useState(false)
  const [shouldScrollTop, setShouldScrollTop] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (isValidStoredAnswers(parsed)) {
        setAnswers(parsed)
        setShowResults(true)
      }
    } catch (e) {
      // ignore malformed storage
    }
  }, [])

  useEffect(() => {
    if (!shouldScrollTop) return
    if (typeof window === "undefined") return
    const scroller = document.querySelector(".n-container")
    if (scroller) {
      scroller.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setShouldScrollTop(false)
  }, [shouldScrollTop])

  const sums = useMemo(() => answers.map(sectionSum), [answers])
  const allValid = sums.every((s) => s === 10)
  const grandTotal = sums.reduce((a, b) => a + b, 0)

  const handleChange = (sectionIdx, letter, raw) => {
    if (raw === "") {
      setAnswers((prev) => {
        const next = prev.map((s) => ({ ...s }))
        next[sectionIdx][letter] = ""
        return next
      })
      return
    }
    const n = parseInt(raw, 10)
    if (Number.isNaN(n) || n < 0) return
    const clamped = Math.min(n, 10)
    setAnswers((prev) => {
      const next = prev.map((s) => ({ ...s }))
      next[sectionIdx][letter] = String(clamped)
      return next
    })
  }

  const handleReset = () => {
    setAnswers(emptyAnswers())
    setShowResults(false)
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      // ignore
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!allValid) return
    const snapshot = JSON.parse(JSON.stringify(answers))
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
    } catch (err) {
      // ignore quota / disabled storage
    }
    const results = computeRoleResults(snapshot)
    if (typeof window !== "undefined" && typeof window.fetch === "function") {
      window
        .fetch("/.netlify/functions/email_work_style", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: snapshot, roleResults: results }),
        })
        .catch((err) => console.warn("Work style email POST failed", err))
    }
    setShowResults(true)
    setShouldScrollTop(true)
  }

  const roleResults = useMemo(() => computeRoleResults(answers), [answers])

  const sortedRoleResults = useMemo(
    () => [...roleResults].sort((a, b) => b.total - a.total),
    [roleResults]
  )

  const byFamily = useMemo(() => {
    const groups = { Thinking: [], Action: [], Social: [] }
    roleResults.forEach((r) => groups[r.family].push(r))
    return groups
  }, [roleResults])

  return (
    <div className="root ws-root">
      <Layout location={location}>
        <SEO title="Work Style Questionnaire" />
        <Header
          title="Work Style Questionnaire"
          links_to="/"
          className="ws-header"
        />
        <Content>
          <div className="ws-intro">
            <p>
              A self-assessment that maps how you behave in teams to{" "}
              <strong>9 team roles</strong>. In each of the 7 sections,
              distribute <strong>10 points</strong> across the statements (a–i)
              based on how well they describe you. You can put them all on a
              single statement or spread them across several.
            </p>
            <p className="ws-progress">
              Running total: <strong>{grandTotal}</strong> / 70
            </p>
          </div>

          {showResults && (
            <ResultsPanel
              roleResults={roleResults}
              sortedRoleResults={sortedRoleResults}
              byFamily={byFamily}
              onReset={handleReset}
            />
          )}

          <form onSubmit={handleCalculate} className="ws-form">
            {SECTIONS.map((section, idx) => {
              const sum = sums[idx]
              const state =
                sum === 10 ? "ok" : sum > 10 ? "over" : sum === 0 ? "empty" : "under"
              return (
                <fieldset key={idx} className={`ws-section state-${state}`}>
                  <legend>
                    <span className="sec-num">{idx + 1}.</span>{" "}
                    {section.title}
                    <span className="sec-sum">
                      {sum}/10
                    </span>
                  </legend>
                  <ul className="ws-statements">
                    {LETTERS.map((letter) => (
                      <li key={letter}>
                        <label>
                          <input
                            type="number"
                            min="0"
                            max="10"
                            inputMode="numeric"
                            value={answers[idx][letter]}
                            onChange={(e) =>
                              handleChange(idx, letter, e.target.value)
                            }
                          />
                          <span className="letter">{letter})</span>
                          <span className="text">
                            {section.statements[letter]}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </fieldset>
              )
            })}

            <div className="ws-actions">
              <button type="button" className="btn-reset" onClick={handleReset}>
                Reset
              </button>
              <button
                type="submit"
                className="btn-submit"
                disabled={!allValid}
                title={
                  allValid
                    ? "Calculate results"
                    : "Each section must total exactly 10"
                }
              >
                Calculate results
              </button>
            </div>
            {!allValid && (
              <p className="ws-hint">
                Each section has to add up to exactly 10 points.
              </p>
            )}
          </form>
        </Content>
      </Layout>
    </div>
  )
}

const FAMILY_ORDER = ["Thinking", "Action", "Social"]

const RING_LABELS = ["Low", "Medium", "High", "Very high"]

const normalizeRoleValue = (total, bands) => {
  const [b0, b1, b2, b3] = bands
  if (total <= 0) return 0
  if (total <= b0) return b0 === 0 ? 0 : (total / b0) * 0.25
  if (total <= b1) return 0.25 + ((total - b0) / (b1 - b0)) * 0.25
  if (total <= b2) return 0.5 + ((total - b1) / (b2 - b1)) * 0.25
  if (total <= b3) return 0.75 + ((total - b2) / (b3 - b2)) * 0.25
  return 1
}

const RadarChart = ({ roleResults, compareRoleResults, compareLabel }) => {
  const width = 780
  const height = 520
  const cx = width / 2
  const cy = height / 2
  const R = 180
  const n = roleResults.length

  const angleFor = (i) => (i * 2 * Math.PI) / n - Math.PI / 2
  const pointAt = (i, r) => ({
    x: cx + r * Math.cos(angleFor(i)),
    y: cy + r * Math.sin(angleFor(i)),
  })

  const ringPoints = (frac) =>
    roleResults
      .map((_, i) => {
        const p = pointAt(i, R * frac)
        return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
      })
      .join(" ")

  const polygonPoints = (results) =>
    results
      .map((r, i) => {
        const v = normalizeRoleValue(r.total, r.bands)
        const p = pointAt(i, R * v)
        return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
      })
      .join(" ")

  const dataPoints = polygonPoints(roleResults)
  const comparePoints = compareRoleResults
    ? polygonPoints(compareRoleResults)
    : null

  const rings = [0.25, 0.5, 0.75, 1]

  return (
    <div className="ws-radar-wrap">
      <svg
        className="ws-radar"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Work style radar chart"
      >
        {rings.map((frac, idx) => (
          <polygon
            key={idx}
            points={ringPoints(frac)}
            className={`ring ring-${idx}`}
          />
        ))}

        {roleResults.map((_, i) => {
          const p = pointAt(i, R)
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              className="axis"
            />
          )
        })}

        {comparePoints && (
          <polygon points={comparePoints} className="compare-polygon" />
        )}

        <polygon points={dataPoints} className="data-polygon" />

        {compareRoleResults &&
          compareRoleResults.map((r, i) => {
            const v = normalizeRoleValue(r.total, r.bands)
            const p = pointAt(i, R * v)
            return (
              <circle
                key={`cmp-${r.abbr}`}
                cx={p.x}
                cy={p.y}
                r={4}
                className="compare-data-point"
              >
                <title>
                  {compareLabel || "Comparison"} · {r.name}: {r.total} —{" "}
                  {r.range.label}
                </title>
              </circle>
            )
          })}

        {roleResults.map((r, i) => {
          const v = normalizeRoleValue(r.total, r.bands)
          const p = pointAt(i, R * v)
          return (
            <circle
              key={r.abbr}
              cx={p.x}
              cy={p.y}
              r={5}
              className={`data-point point-${r.range.key}`}
            >
              <title>
                {r.name}: {r.total} — {r.range.label}
              </title>
            </circle>
          )
        })}

        {roleResults.map((r, i) => {
          const labelRadius = R + 34
          const p = pointAt(i, labelRadius)
          const cosA = Math.cos(angleFor(i))
          const anchor =
            Math.abs(cosA) < 0.2 ? "middle" : cosA > 0 ? "start" : "end"
          return (
            <g key={r.abbr} className="axis-label">
              <text x={p.x} y={p.y - 4} textAnchor={anchor}>
                {r.abbr} · {r.name}
              </text>
              <text
                x={p.x}
                y={p.y + 12}
                textAnchor={anchor}
                className="axis-label-value"
              >
                {r.total}
                {compareRoleResults
                  ? ` / ${compareRoleResults[i].total}`
                  : ""}
              </text>
            </g>
          )
        })}
      </svg>
      <ul className="radar-legend">
        {RING_LABELS.map((label, idx) => (
          <li key={label}>
            <span className={`dot dot-${idx}`} />
            {label}
          </li>
        ))}
        {compareRoleResults && (
          <>
            <li>
              <span className="swatch swatch-self" /> You
            </li>
            <li>
              <span className="swatch swatch-compare" />{" "}
              {compareLabel || "Comparison"}
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

const ComparisonPanel = ({ roleResults }) => {
  const compareRows = useMemo(
    () =>
      roleResults
        .map((r, i) => {
          const mine = AGUSTI_ROLE_RESULTS[i]
          const delta = r.total - mine.total
          return { role: r, mine, delta }
        })
        .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta)),
    [roleResults]
  )

  return (
    <div className="comparison-panel">
      <h3>Comparison with Agustí's results</h3>
      <p className="comparison-hint">
        Your profile (green) over mine (orange). The table is sorted by
        absolute difference to highlight where we differ most.
      </p>

      <RadarChart
        roleResults={roleResults}
        compareRoleResults={AGUSTI_ROLE_RESULTS}
        compareLabel="Agustí"
      />

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Role</th>
              <th className="num">You</th>
              <th className="num">Agustí</th>
              <th className="num">Δ</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map(({ role, mine, delta }) => {
              const dir =
                delta > 0 ? "delta-pos" : delta < 0 ? "delta-neg" : "delta-zero"
              return (
                <tr key={role.abbr}>
                  <td>
                    <strong>{role.name}</strong>
                  </td>
                  <td className="num">{role.total}</td>
                  <td className="num muted">{mine.total}</td>
                  <td className={`num ${dir}`}>
                    {delta > 0 ? `+${delta}` : delta}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const ResultsPanel = ({
  roleResults,
  sortedRoleResults,
  byFamily,
  onReset,
}) => {
  const primary = sortedRoleResults.slice(0, 2)
  const secondary = sortedRoleResults.slice(2, 4)

  return (
    <div className="ws-results">
      <h2>Your results</h2>

      <RadarChart roleResults={roleResults} />

      <div className="results-summary">
        <div className="summary-block">
          <h3>Primary roles</h3>
          <ul>
            {primary.map((r) => (
              <li key={r.abbr}>
                <strong>{r.name}</strong> — {r.total} pts ·{" "}
                <span className={`range-tag range-${r.range.key}`}>
                  {r.range.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="summary-block">
          <h3>Secondary roles</h3>
          <ul>
            {secondary.map((r) => (
              <li key={r.abbr}>
                <strong>{r.name}</strong> — {r.total} pts ·{" "}
                <span className={`range-tag range-${r.range.key}`}>
                  {r.range.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Breakdown by family</h3>
      <div className="family-grid">
        {FAMILY_ORDER.map((family) => (
          <div key={family} className="family-block">
            <h4>{family}</h4>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Total</th>
                  <th>Average</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                {byFamily[family].map((r) => (
                  <tr key={r.abbr}>
                    <td>
                      <strong>{r.name}</strong>
                    </td>
                    <td className="num">{r.total}</td>
                    <td className="num muted">{r.average}</td>
                    <td>
                      <span className={`range-tag range-${r.range.key}`}>
                        {r.range.label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <p className="results-note">
        The ranges are role-specific: the same raw score doesn't mean the same
        thing across roles (e.g. Shaper averages 11.6 while Completer-Finisher
        averages 5.5).
      </p>

      <ComparisonPanel roleResults={roleResults} />

      <div className="ws-actions">
        <button type="button" className="btn-reset" onClick={onReset}>
          Reset questionnaire
        </button>
      </div>
    </div>
  )
}

export default WorkStylePage
