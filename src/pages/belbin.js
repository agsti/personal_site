import React, { useEffect, useMemo, useState } from "react"

import { Layout, Content } from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import "../css/base.scss"
import "../css/belbin.scss"

const SECTIONS = [
  {
    title: "Qué creo que puedo aportar a un equipo",
    statements: {
      a: "Detecto y aprovecho rápidamente nuevas oportunidades.",
      b: "Trabajo bien con personas de muy diversa índole.",
      c: "Uno de mis talentos naturales es crear ideas.",
      d: "Atraigo a quienes pueden aportar algo valioso para los objetivos del grupo.",
      e: "Mi capacidad de seguimiento me hace eficaz.",
      f: "Asumo impopularidad temporal si conduce a resultados que valen la pena.",
      g: "Detecto rápidamente lo que puede funcionar en situaciones familiares.",
      h: "Presento alternativas razonadas sin prejuicios.",
      i: "Mis comentarios generales y específicos son siempre bien recibidos.",
    },
  },
  {
    title: "Si tengo un defecto para el trabajo en equipo, es que…",
    statements: {
      a: "No estoy a gusto si las reuniones no están bien organizadas y dirigidas.",
      b: "Soy demasiado generoso con quienes defienden puntos de vista válidos no considerados.",
      c: "Hablo mucho cuando el grupo trata ideas nuevas.",
      d: "Mi objetividad me hace difícil unirme con entusiasmo a los colegas.",
      e: "A veces se me considera enérgico y autoritario cuando hay que hacer algo.",
      f: "Me cuesta tomar el liderazgo; reacciono fuertemente al ambiente del grupo.",
      g: "Me engancho demasiado con mis ideas y pierdo contacto con lo que pasa.",
      h: "Se me considera preocupado en exceso por los detalles y por que algo salga mal.",
      i: "Me cuesta contribuir salvo que el tema sea algo que conozca bien.",
    },
  },
  {
    title: "Cuando participo con otras personas en un proyecto",
    statements: {
      a: "Influyo sobre las personas sin presionarlas.",
      b: "Mi vigilancia general evita omisiones y errores por descuido.",
      c: "Presiono a favor de la acción para que el grupo no pierda su objetivo.",
      d: "Siempre aporto algo original.",
      e: "Respaldo cualquier buena sugerencia por el interés general.",
      f: "Me entusiasma buscar lo último en ideas y adelantos.",
      g: "Los demás aprecian mi capacidad para juzgar fríamente.",
      h: "Se confía en mí para comprobar que el trabajo esencial está organizado.",
      i: "Siempre actúo como un buen profesional.",
    },
  },
  {
    title: "Mi actitud característica ante el trabajo en equipo consiste en",
    statements: {
      a: "Me interesa conocer mejor a mis colegas.",
      b: "No rechazo desafiar puntos de vista ajenos o defender el mío en minoría.",
      c: "Encuentro argumentos para refutar propuestas que no me parecen bien.",
      d: "Tengo talento para hacer funcionar las cosas una vez puesto en marcha el plan.",
      e: "Evito lo obvio y presento lo inesperado.",
      f: "Aporto un toque de perfeccionismo a cualquier tarea.",
      g: "Uso los contactos que tengo fuera del grupo.",
      h: "Adopto una opinión propia al decidir, aunque escuche todas las opiniones.",
      i: "Contribuyo cuando realmente sé del tema.",
    },
  },
  {
    title: "Obtengo satisfacción en el trabajo porque",
    statements: {
      a: "Disfruto analizando situaciones y sopesando opciones.",
      b: "Me interesa encontrar soluciones prácticas.",
      c: "Me gusta fomentar buenas relaciones en el trabajo.",
      d: "Puedo influir fuertemente en las decisiones.",
      e: "Me gusta conocer a personas que ofrecen algo nuevo.",
      f: "Pongo de acuerdo a los compañeros sobre las acciones a tomar.",
      g: "Me encuentro en mi elemento dedicando toda mi atención a una tarea.",
      h: "Me gusta encontrar un campo que amplíe mi imaginación.",
      i: "Siento que uso mis cualidades y me entreno para mejorar.",
    },
  },
  {
    title: "Si me asignaran de repente una tarea difícil con gente desconocida",
    statements: {
      a: "Me retiraría a un rincón a pensar la forma de abordarla.",
      b: "Trabajaría con quien tuviera el enfoque más positivo, aunque su carácter sea difícil.",
      c: "Reduciría el volumen de la tarea determinando la mejor aportación de cada uno.",
      d: "Mi sentido de la urgencia aseguraría que no nos retrasáramos.",
      e: "Permanecería sereno y pensaría con claridad.",
      f: "Me mantendría firme en mis propósitos pese a las presiones.",
      g: "Tomaría la iniciativa si el grupo no progresa.",
      h: "Abriría discusiones para buscar nuevas ideas.",
      i: "Me informaría sobre el tema tanto como pudiera.",
    },
  },
  {
    title: "Problemas que suelo padecer cuando trabajo en grupo",
    statements: {
      a: "Me impaciento con quienes obstaculizan el avance.",
      b: "Me critican por ser demasiado analítico y poco intuitivo.",
      c: "Mi afán de hacer el trabajo bien puede frenar al grupo.",
      d: "Me aburro fácilmente y me apoyo en otros para que me estimulen.",
      e: "Me cuesta ponerme en marcha si no veo claros los objetivos.",
      f: "Soy torpe explicando ideas complejas que se me ocurren.",
      g: "Pido a los demás cosas que yo mismo no puedo hacer.",
      h: "Dudo en defender mis puntos de vista ante oposición real.",
      i: "Pienso que pierdo el tiempo y que lo haría mejor yo solo.",
    },
  },
]

// Section-by-section letter that maps to each role (Table A.2).
// Order: [section1, section2, ..., section7]
const ROLES = [
  {
    abbr: "PL",
    es: "Creativo",
    en: "Plant",
    family: "Mental",
    letters: ["c", "g", "d", "e", "h", "a", "f"],
    bands: [4, 8, 12, 29],
    average: 7.3,
  },
  {
    abbr: "ME",
    es: "Evaluador",
    en: "Monitor Evaluator",
    family: "Mental",
    letters: ["h", "d", "g", "c", "a", "e", "b"],
    bands: [5, 9, 12, 19],
    average: 8.2,
  },
  {
    abbr: "SP",
    es: "Especialista",
    en: "Specialist",
    family: "Mental",
    letters: ["i", "i", "i", "i", "i", "i", "i"],
    bands: [4, 7, 12, 29],
    average: 5.6,
  },
  {
    abbr: "SH",
    es: "Impulsor",
    en: "Shaper",
    family: "Acción",
    letters: ["f", "e", "c", "b", "d", "g", "a"],
    bands: [8, 13, 17, 36],
    average: 11.6,
  },
  {
    abbr: "IM",
    es: "Implementador",
    en: "Implementer",
    family: "Acción",
    letters: ["g", "a", "h", "d", "b", "f", "e"],
    bands: [6, 11, 16, 23],
    average: 10.0,
  },
  {
    abbr: "CF",
    es: "Finalizador",
    en: "Completer-Finisher",
    family: "Acción",
    letters: ["e", "h", "b", "f", "g", "d", "c"],
    bands: [3, 6, 9, 17],
    average: 5.5,
  },
  {
    abbr: "CO",
    es: "Coordinador",
    en: "Coordinator",
    family: "Social",
    letters: ["d", "b", "a", "h", "f", "c", "g"],
    bands: [6, 10, 13, 18],
    average: 8.8,
  },
  {
    abbr: "TW",
    es: "Cohesionador",
    en: "Teamworker",
    family: "Social",
    letters: ["b", "f", "e", "a", "c", "b", "h"],
    bands: [8, 12, 16, 25],
    average: 10.9,
  },
  {
    abbr: "RI",
    es: "Buscador de Recursos",
    en: "Resource Investigator",
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
  if (total <= lowMax) return { label: "Bajo", key: "low" }
  if (total <= medMax) return { label: "Medio", key: "med" }
  if (total <= highMax) return { label: "Alto", key: "high" }
  return { label: "Muy alto", key: "vhigh" }
}

const STORAGE_KEY = "belbin_last_answers"

const isValidStoredAnswers = (parsed) =>
  Array.isArray(parsed) &&
  parsed.length === SECTIONS.length &&
  parsed.every(
    (s) =>
      s &&
      typeof s === "object" &&
      LETTERS.every((l) => l in s)
  )

const BelbinPage = ({ location }) => {
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
        console.log("Belbin responses (restored):", parsed)
        console.log(
          "Belbin responses (restored, JSON):",
          JSON.stringify(parsed)
        )
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
    console.log(
      "Belbin responses:",
      JSON.parse(JSON.stringify(answers))
    )
    console.log("Belbin responses (JSON):", JSON.stringify(answers))
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
    } catch (err) {
      // ignore quota / disabled storage
    }
    setShowResults(true)
    setShouldScrollTop(true)
  }

  const roleResults = useMemo(() => {
    return ROLES.map((role) => {
      const total = role.letters.reduce(
        (sum, letter, idx) => sum + toInt(answers[idx][letter]),
        0
      )
      const range = classify(total, role.bands)
      return { ...role, total, range }
    })
  }, [answers])

  const sortedRoleResults = useMemo(
    () => [...roleResults].sort((a, b) => b.total - a.total),
    [roleResults]
  )

  const byFamily = useMemo(() => {
    const groups = { Mental: [], Acción: [], Social: [] }
    roleResults.forEach((r) => groups[r.family].push(r))
    return groups
  }, [roleResults])

  return (
    <div className="root belbin-root">
      <Layout location={location}>
        <SEO title="Cuestionario Belbin" />
        <Header
          title="Cuestionario Belbin"
          links_to="/"
          className="belbin-header"
        />
        <Content>
          <div className="belbin-intro">
            <p>
              Auto-evaluación que mapea tu comportamiento en equipos a los{" "}
              <strong>9 roles de Belbin</strong>. En cada una de las 7
              secciones, reparte <strong>10 puntos</strong> entre las
              afirmaciones (a–i) según cuánto te describan. Puedes concentrarlos
              en una sola afirmación o distribuirlos entre varias.
            </p>
            <p className="belbin-progress">
              Total acumulado: <strong>{grandTotal}</strong> / 70
            </p>
          </div>

          {showResults && (
            <ResultsPanel
              answers={answers}
              roleResults={roleResults}
              sortedRoleResults={sortedRoleResults}
              byFamily={byFamily}
              onReset={handleReset}
            />
          )}

          <form onSubmit={handleCalculate} className="belbin-form">
            {SECTIONS.map((section, idx) => {
              const sum = sums[idx]
              const state =
                sum === 10 ? "ok" : sum > 10 ? "over" : sum === 0 ? "empty" : "under"
              return (
                <fieldset key={idx} className={`belbin-section state-${state}`}>
                  <legend>
                    <span className="sec-num">{idx + 1}.</span>{" "}
                    {section.title}
                    <span className="sec-sum">
                      {sum}/10
                    </span>
                  </legend>
                  <ul className="belbin-statements">
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

            <div className="belbin-actions">
              <button type="button" className="btn-reset" onClick={handleReset}>
                Reiniciar
              </button>
              <button
                type="submit"
                className="btn-submit"
                disabled={!allValid}
                title={
                  allValid
                    ? "Calcular resultados"
                    : "Cada sección debe sumar exactamente 10"
                }
              >
                Calcular resultados
              </button>
            </div>
            {!allValid && (
              <p className="belbin-hint">
                Cada sección tiene que sumar exactamente 10 puntos.
              </p>
            )}
          </form>
        </Content>
      </Layout>
    </div>
  )
}

const FAMILY_ORDER = ["Mental", "Acción", "Social"]

const RING_LABELS = ["Bajo", "Medio", "Alto", "Muy alto"]

const normalizeRoleValue = (total, bands) => {
  const [b0, b1, b2, b3] = bands
  if (total <= 0) return 0
  if (total <= b0) return b0 === 0 ? 0 : (total / b0) * 0.25
  if (total <= b1) return 0.25 + ((total - b0) / (b1 - b0)) * 0.25
  if (total <= b2) return 0.5 + ((total - b1) / (b2 - b1)) * 0.25
  if (total <= b3) return 0.75 + ((total - b2) / (b3 - b2)) * 0.25
  return 1
}

const RadarChart = ({ roleResults }) => {
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

  const dataPoints = roleResults
    .map((r, i) => {
      const v = normalizeRoleValue(r.total, r.bands)
      const p = pointAt(i, R * v)
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
    })
    .join(" ")

  const rings = [0.25, 0.5, 0.75, 1]

  return (
    <div className="belbin-radar-wrap">
      <svg
        className="belbin-radar"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Perfil Belbin en gráfico radar"
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

        <polygon points={dataPoints} className="data-polygon" />

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
                {r.es} ({r.en}): {r.total} — {r.range.label}
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
                {r.abbr} · {r.es}
              </text>
              <text
                x={p.x}
                y={p.y + 12}
                textAnchor={anchor}
                className="axis-label-value"
              >
                {r.total}
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
      </ul>
    </div>
  )
}

const AnswersBreakdown = ({ answers, roleResults }) => {
  const [hoveredRole, setHoveredRole] = useState(null)

  const activeRole = roleResults.find((r) => r.abbr === hoveredRole)

  const isHighlighted = (sectionIdx, letter) =>
    activeRole && activeRole.letters[sectionIdx] === letter

  return (
    <>
      <h3>Desglose de respuestas</h3>
      <p className="breakdown-hint">
        Pasa el ratón (o enfoca con teclado) sobre un rol para ver qué celdas de
        tus respuestas suman a su puntuación.
      </p>
      <div className="breakdown-layout">
        <div className="breakdown-table-wrap">
          <table className="answers-table">
            <thead>
              <tr>
                <th scope="col">Sec.</th>
                {LETTERS.map((l) => (
                  <th key={l} scope="col">
                    {l}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {answers.map((section, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  {LETTERS.map((l) => {
                    const val = toInt(section[l])
                    const highlighted = isHighlighted(idx, l)
                    return (
                      <td
                        key={l}
                        className={
                          (highlighted ? "highlighted " : "") +
                          (val === 0 ? "zero" : "")
                        }
                      >
                        {val === 0 ? "·" : val}
                      </td>
                    )
                  })}
                </tr>
              ))}
              {activeRole && (
                <tr className="total-row">
                  <th scope="row">Σ</th>
                  {LETTERS.map((l) => {
                    const sum = answers.reduce((acc, section, idx) => {
                      return (
                        acc +
                        (activeRole.letters[idx] === l
                          ? toInt(section[l])
                          : 0)
                      )
                    }, 0)
                    return (
                      <td key={l} className={sum > 0 ? "highlighted" : "zero"}>
                        {sum > 0 ? sum : ""}
                      </td>
                    )
                  })}
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ul className="breakdown-roles">
          {roleResults.map((role) => {
            const active = hoveredRole === role.abbr
            return (
              <li
                key={role.abbr}
                className={active ? "active" : ""}
                onMouseEnter={() => setHoveredRole(role.abbr)}
                onMouseLeave={() => setHoveredRole(null)}
                onFocus={() => setHoveredRole(role.abbr)}
                onBlur={() => setHoveredRole(null)}
                tabIndex={0}
              >
                <span className="role-name">
                  <strong>{role.es}</strong>
                  <span className="muted"> ({role.en})</span>
                </span>
                <span className="role-total">{role.total}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

const ResultsPanel = ({
  answers,
  roleResults,
  sortedRoleResults,
  byFamily,
  onReset,
}) => {
  const primary = sortedRoleResults.slice(0, 2)
  const secondary = sortedRoleResults.slice(2, 4)

  return (
    <div className="belbin-results">
      <h2>Tus resultados</h2>

      <RadarChart roleResults={roleResults} />

      <div className="results-summary">
        <div className="summary-block">
          <h3>Roles principales</h3>
          <ul>
            {primary.map((r) => (
              <li key={r.abbr}>
                <strong>{r.es}</strong> ({r.en}) — {r.total} pts ·{" "}
                <span className={`rango rango-${r.range.key}`}>
                  {r.range.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="summary-block">
          <h3>Roles secundarios</h3>
          <ul>
            {secondary.map((r) => (
              <li key={r.abbr}>
                <strong>{r.es}</strong> ({r.en}) — {r.total} pts ·{" "}
                <span className={`rango rango-${r.range.key}`}>
                  {r.range.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Desglose por familia</h3>
      <div className="family-grid">
        {FAMILY_ORDER.map((family) => (
          <div key={family} className="family-block">
            <h4>{family}</h4>
            <table>
              <thead>
                <tr>
                  <th>Rol</th>
                  <th>Total</th>
                  <th>Media</th>
                  <th>Rango</th>
                </tr>
              </thead>
              <tbody>
                {byFamily[family].map((r) => (
                  <tr key={r.abbr}>
                    <td>
                      <strong>{r.es}</strong>
                      <br />
                      <span className="muted">{r.en}</span>
                    </td>
                    <td className="num">{r.total}</td>
                    <td className="num muted">{r.average}</td>
                    <td>
                      <span className={`rango rango-${r.range.key}`}>
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

      <AnswersBreakdown answers={answers} roleResults={roleResults} />

      <p className="results-note">
        Los rangos son específicos de cada rol: una puntuación bruta no significa
        lo mismo entre roles distintos (p. ej. Impulsor promedia 11.6 mientras
        Finalizador promedia 5.5).
      </p>

      <div className="belbin-actions">
        <button type="button" className="btn-reset" onClick={onReset}>
          Reiniciar cuestionario
        </button>
      </div>
    </div>
  )
}

export default BelbinPage
