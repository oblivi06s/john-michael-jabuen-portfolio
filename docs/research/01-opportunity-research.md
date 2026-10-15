# Phase 1 — Business Opportunity Research

Status: **Draft for review.** Nothing here is validated yet.
Date: 2026-10-15
Next step: John reviews and approves (or rejects) the flagship pick.

---

## 0. How this research was done (and its limits)

**Method**

1. Searched for real operational pain in admin, finance-ops, and EA work.
2. For each pain, searched for existing products, n8n templates, and native features.
3. Scored each candidate. Picked one flagship.

**Evidence types used**

- Official product docs (ServiceTitan, Harvest, QuickBooks community, n8n template library).
- Job descriptions (EA duties).
- Vendor blogs and pricing pages (marked as *vendor* — biased).

**Honest limits**

- **Reddit was blocked** for my search tool. I could not read any Reddit thread directly. Where a vendor blog quoted Reddit, I mark it "secondhand."
- Most problem evidence comes from vendors who sell a fix. That proves vendors *think* there is a market. It does not prove buyers feel the pain.
- No statistic below is independently verified. Any number from a vendor is labeled.
- **Nothing is validated until real people confirm it in interviews** (see Section 5).

---

## 1. Deliverable 1 — Problem inventory

### Strongest recurring problems found

| # | Problem | Who feels it | Best evidence | Evidence type |
|---|---------|--------------|---------------|---------------|
| P1 | Won deals or finished jobs never get invoiced | Owners, bookkeepers, ops at service firms | [ScaleXP help](https://www.help.scalexp.com/subscription-management-including-renewal-tracking/how-to-find-missing-invoices-and-stop-revenue-leakage), [Ordway](https://ordwaylabs.com/blog/detect-and-eliminate-revenue-leakage/), [ServiceTitan docs](https://help.servicetitan.com/docs/can-i-make-a-report-that-tracks-open-jobs-and-payment-status), [Harvest Uninvoiced report](https://help.getharvest.com/api-v2/reports-api/reports/uninvoiced-report/) | Vendor + official docs |
| P2 | Retainer scope changes never reach billing | Agency owners, account managers | [Anchor](https://www.sayanchor.com/post/why-marketing-agencies-retainers-break-billing), [Fuzen](https://www.fuzen.io/posts/retainer-management-system-for-marketing-agencies) | Vendor |
| P3 | Other people's promises (from email/meetings) are not tracked | EAs, executives | [Fellow](https://fellow.ai/blog/how-to-track-action-items-steps-to-ensure-follow-through/), [mem.ai guide](https://get.mem.ai/guides/action-items-actually-get-done), [Town Delegation Tracker](https://www.town.com/routines/delegation-tracker), EA job posts ([resumegeni](https://resumegeni.com/job-descriptions/executive-assistant-job-description)) | Vendor + job posts |
| P4 | Near-duplicate vendor bills get paid twice | Bookkeepers, AP clerks | [Stripe guide](https://stripe.com/au/resources/more/how-to-prevent-duplicate-payments), [QBO duplicate check limits](https://invoicedataextraction.com/blog/prevent-duplicate-bills-in-quickbooks-online), [Intuit community](https://quickbooks.intuit.com/community/reports-and-accounting-5/does-qb-online-catch-duplicate-bill-pay-43797) | Vendor + community |
| P5 | Vendor/subcontractor insurance certificates (COIs) expire unnoticed | Property managers, GCs, ops | [ServicePower](https://www.servicepower.com/blog/coi-tracking-spreadsheet), [imagetotable](https://imagetotable.ai/blog/certificate-of-insurance-data-extraction-excel) (secondhand Reddit quote) | Vendor |
| P6 | Contract notice deadlines missed (auto-renew traps) | Ops, finance, EAs | [Sirion](https://www.sirion.ai/library/contract-insights/auto-renewal-tracking-systems/), [Vaquill](https://www.vaquill.ai/blog/contract-renewal-tracking) | Vendor |
| P7 | Chasing clients for missing documents every month | Bookkeepers, accountants | [Agiled](https://agiled.app/hub/bookkeepers/collect-client-documents), [DocChase](https://hunted.space/product/docchase) | Vendor |
| P8 | Lien waivers missing at draw time | Construction GCs, AP | [Levelset](https://www.levelset.com/blog/tracking-lien-waivers/), [GC AP workpaper](https://invoicedataextraction.com/blog/subcontractor-lien-waiver-tracker-gc-ap) | Vendor |
| P9 | Vendor statements don't match the AP ledger | AP, bookkeepers | [Nanonets](https://nanonets.com/blog/vendor-account-reconciliation), [Ramp](https://ramp.com/blog/vendor-reconciliation) | Vendor |
| P10 | Forgotten SaaS subscriptions auto-renew | Ops, finance | [Torii](https://www.toriihq.com/articles/blog/alternatives-to-excel-saas-contract-renewal-tracking.txt), [stmicro](https://www.stmicro.net/blog/how-to-audit-saas-subscriptions-business/) | Vendor |
| P11 | Staff licenses/certifications expire | HR, ops in trades/healthcare | [Aptien](https://aptien.com/en/kb/articles/how-to-track-employee-certifications-and-licenses), [Expiration Reminder](https://expirationreminder.com/webinars/tracking-employee-certifications) | Vendor |
| P12 | Client onboarding stalls on missing info | Agencies, service firms | [jetadmin checklist](https://www.jetadmin.io/blog/client-onboarding-checklist/amp/), [Enterprise DNA](https://enterprisedna.co/resources/insights/accounting-ai-client-onboarding) | Vendor |

### Rejected ideas (and why)

- **Meeting summarizer / AI note-taker.** Crowded (Fellow, Circleback, Otter, etc.). User asked to avoid.
- **Lead follow-up / booking / chatbot.** User asked to avoid. Very crowded.
- **SaaS subscription audit (P10).** Well served by Torii, Zylo, Vendr. Plus many free n8n templates.
- **Staff license expiry (P11).** Well served (Expiration Reminder, BusyBusy, HireRight). Simple date reminders. Weak differentiation.
- **Contract notice deadlines (P6) as a flagship.** Real pain, but at least 5 public n8n templates already do it ([15231](https://n8n.io/workflows/15231-send-tiered-contract-renewal-slack-alerts-from-google-sheets/), [19489](https://n8n.io/workflows/19489), [15498](https://n8n.io/workflows/15498-send-multi-stage-saas-renewal-alerts-from-google-sheets-to-slack/)). Good *learning* project. Weak portfolio differentiator.

---

## 2. Deliverable 2 — Ranked opportunity table

Scores are 1–5. Higher is better. **Novelty never outweighs evidence.**
Weights: Severity 20%, Evidence 20%, Measurable value 20%, Competitive gap 15%, Feasibility 15%, Career fit 10%.

| Rank | Opportunity | Target user | Current manual process | Competitors | Gap | Class* | Sev | Evid | Value | Gap | Feas | Career | **Score** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Won-but-Not-Billed Watchdog** (P1+P2) | Small service firms / agencies on GHL + QuickBooks/Stripe | Owner or bookkeeper eyeballs CRM vs invoices at month end, if at all | ScaleXP (HubSpot/Xero, from £100/mo), ServiceTitan & Harvest reports (inside their own tool only), one-way Zapier/Make "won → create invoice" recipes | No cheap **cross-system check** for GHL users. Recipes *create* invoices but never *verify* nothing slipped | 3 | 5 | 3 | 5 | 4 | 4 | 5 | **4.3** |
| 2 | Waiting-On Tracker (P3) | EAs and execs | Manual "waiting for" list, memory, flagged emails | Boomerang, Town, Huskwoot (open source), AI note-takers | Few tools track *others'* promises across email + meetings with human-approved nudges. New AI tools are arriving fast | 2 | 4 | 3 | 3 | 3 | 4 | 5 | **3.6** |
| 3 | Near-Duplicate Bill Guard (P4) | Bookkeepers for SMBs on QBO | Rely on QBO exact-match check, then hope | QBO native (exact vendor+number only), ApprovalMax, AP suites | Fuzzy matching (vendor name variants, number formats) is missing in cheap tools | 2 | 4 | 3 | 4 | 3 | 4 | 3 | **3.5** |
| 4 | Vendor Statement Reconciler (P9) | AP / bookkeepers | Line-by-line spreadsheet compare at month end | Nanonets, KlearStack, Ramp | Tools target mid-market AP. Small firms still use spreadsheets | 3 | 3 | 3 | 4 | 3 | 3 | 3 | **3.2** |
| 5 | COI Compliance Tracker (P5) | Property managers, GCs | Spreadsheet + email chasing | myCOI, TrustLayer, BCS, n8n template [18553](https://n8n.io/workflows/18553-track-vendor-insurance-cois-and-renewals-with-gmail-deepseek-sheets-discord-and-telegram/) | Mostly solved. Cheap tier exists. n8n template exists | 1–2 | 4 | 3 | 3 | 2 | 4 | 3 | **3.2** |
| 6 | Lien Waiver Draw Checker (P8) | Construction GCs | Spreadsheet, email, memory, scramble each draw | Levelset (Procore), Siteline | Conditional/unconditional pairing across periods is hard in sheets | 2 | 4 | 3 | 4 | 2 | 3 | 2 | **3.1** |
| 7 | Contract Notice Deadline Guard (P6) | Ops, EAs | Calendar reminders on end date (wrong date) | CLMs, many n8n templates | Small. Mostly solved | 1 | 4 | 3 | 3 | 1 | 5 | 4 | **3.2** |
| 8 | Document Chaser (P7) | Bookkeepers | Email reminders by hand | DocChase, Content Snare, TaxDome, Karbon | Solved for accountants | 1 | 3 | 3 | 3 | 1 | 4 | 3 | **2.8** |
| 9 | Onboarding Gap Checker (P12) | Agencies | Checklist + chasing | Many onboarding tools | Crowded | 1 | 3 | 2 | 3 | 1 | 4 | 3 | **2.6** |
| 10 | SaaS Renewal Audit (P10) | Ops | Spreadsheet audit | Torii, Zylo, n8n templates | Solved | 1 | 3 | 2 | 3 | 1 | 4 | 3 | **2.6** |

*Class: 1 = many good solutions, 2 = solutions with real limits, 3 = fragmented / partly solved, 4 = possibly underserved, 5 = not enough evidence.

**Build cost** for every candidate above: about $0–$20/month (self-hosted n8n or n8n cloud trial, Google Sheets, free tiers). AI API cost only where marked.
**Initial build time** for a first prototype: 1–3 weeks part-time for ranks 1–7.

---

## 3. Deliverable 3 — Five detailed investigations

### 3.1 Won-but-Not-Billed Watchdog (rank 1)

1. **Current process.** Sales marks a deal "Won" in GHL. Someone is supposed to send an invoice in QuickBooks or Stripe. Delivery starts. Month end: owner skims both systems.
2. **Failure point.** The handoff between "sold" and "billed." Each side assumes the other did it. Also: add-ons and upgrades agreed in chat never reach billing (P2).
3. **Workaround.** Manual cross-check in a spreadsheet. Or no check at all.
4. **Existing software.** ScaleXP does this for HubSpot + Xero/QBO (from ~£100/mo, vendor price). ServiceTitan and Harvest have "unbilled" reports, but only *inside* their own system. Zapier/Make/n8n recipes *create* invoices on Won but do not check for silent failures (currency errors, missing customer match).
5. **Proposed solution.** A scheduled n8n check. Pull won opportunities from GHL. Pull invoices from QuickBooks/Stripe. Match them. Flag gaps. Send a short, human-readable alert with a "confirm / ignore / it's billed elsewhere" choice.
6. **Example (fictional).** "Maple Dental — Website Rebuild" Won on Sept 3 for $4,800. No invoice by Sept 20. Watchdog flags it: *"Won 17 days ago, no invoice found. Closest match: none. Owner: Sarah."*
7. **Initial n8n architecture.** Schedule Trigger → HTTP Request (GHL opportunities) → HTTP Request (invoices) → Code node (normalize + match) → IF (gap found?) → Google Sheets (log finding) → Gmail/Telegram (alert) → Wait/Webhook (human decision) → Sheets (record outcome). Error Trigger workflow for failures.
8. **Integrations.** GHL API, QuickBooks Online or Stripe API, Google Sheets, Gmail or Telegram. All have free sandboxes/test modes.
9. **Test cases.** Exact match. Amount differs. Customer name spelled differently. Two invoices for one deal (partial billing). Deal un-won after invoice. Deposit invoice only. API timeout. Same run triggered twice.
10. **Savings (estimate only).** Formula: *hours saved/week × 48 weeks × loaded hourly cost* + *revenue recovered*. Example assumption: 1.5 hrs/week × 48 × $35 = **$2,520/yr gross labor**. Recovered revenue is unknown until a pilot measures it. One missed $2,000 invoice per year would exceed the labor figure.
11. **Competitors.** ScaleXP = closest, but HubSpot-first and priced for finance teams. GHL has native invoicing but no "won vs billed" audit (to verify in GHL docs).
12. **Portfolio demo.** Fake agency with 30 deals and 28 invoices in sandboxes. Run watchdog. Show 3 seeded gaps caught, 0 false alarms, and the alert message.
13. **Open questions.** How often does this actually happen? Do GHL agencies bill in GHL itself, QBO, or Stripe? Is month-end review already "good enough"?

### 3.2 Waiting-On Tracker (rank 2)

1. **Process.** Exec asks people for things in email and meetings. EA keeps a mental or written "waiting for" list.
2. **Failure point.** Requests to others vanish. Nobody notices until the deadline passes.
3. **Workaround.** Boomerang reminders, flagged emails, sticky notes.
4. **Existing.** Boomerang (single email reminders), Town Delegation Tracker, Huskwoot (open source), AI note-takers (capture but rarely chase).
5. **Solution.** Scan sent mail for asks with deadlines. Log them. Before deadline, draft a nudge for EA approval.
6. **Example.** Exec emails CFO: "Send Q3 numbers by Friday." Friday 3 PM, no reply → draft nudge for EA.
7. **Architecture.** Gmail Trigger (sent) → AI extract (who/what/when + confidence) → Sheets log → Schedule check → IF overdue → draft → approval.
8. **Integrations.** Gmail, OpenAI or similar, Sheets.
9. **Tests.** No deadline. Vague deadline ("soon"). Reply arrives without the thing asked. Low-confidence extraction.
10. **Savings.** Hard to measure. Mostly "missed deadline avoided."
11. **Risk.** AI tools are flooding this space in 2026. Needs real mailbox access — privacy-heavy.
12. **Demo.** Fake mailbox with 20 sent emails.
13. **Questions.** Do EAs trust AI to read sent mail? How many asks slip per week?

### 3.3 Near-Duplicate Bill Guard (rank 3)

1. **Process.** Bills arrive by email; bookkeeper enters them into QBO.
2. **Failure point.** QBO only warns on exact vendor + bill number ([source](https://invoicedataextraction.com/blog/prevent-duplicate-bills-in-quickbooks-online)). "INV-0042" vs "42", or "Smith Electric" vs "Smith Electric LLC", slip through.
3. **Workaround.** Memory, periodic reports.
4. **Existing.** ApprovalMax (vendor+date+amount), AP suites.
5. **Solution.** Nightly scan: normalize vendor names and bill numbers, flag same amount within N days.
6. **Example.** Bill "SE-1001" $850 Sept 2 and "1001" $850 Sept 9 from "Smith Electric LLC."
7. **Architecture.** Schedule → QBO bills → Code (normalize + fuzzy score) → IF score > threshold → alert.
8. **Integrations.** QBO sandbox, Sheets, Gmail.
9. **Tests.** True recurring monthly bill (same amount, legit). Credit notes. Partial payments.
10. **Savings.** Depends on volume. Vendor-cited 0.8–2% duplicate rate is unverified.
11. **Note.** Good *mission* inside the flagship (it uses the same matching skills).

### 3.4 Vendor Statement Reconciler (rank 4)

1. **Process.** Month end: compare each vendor's statement to the AP ledger line by line.
2. **Failure.** Unrecorded invoices, unapplied credits, timing gaps.
3. **Workaround.** Spreadsheets.
4. **Existing.** Nanonets, KlearStack, Ramp — mid-market.
5. **Solution.** Upload statement CSV/PDF → extract → match against ledger → list exceptions.
6. **Example.** Vendor shows $3,200 owed; ledger shows $2,700. Missing invoice #778 for $500.
7. **Architecture.** Webhook/upload → extract (AI for PDFs) → Code match → exceptions sheet.
8. **Risk.** PDF parsing is messy. Needs real statements to test well.

### 3.5 COI Compliance Tracker (rank 5)

1. **Process.** Collect COIs from vendors, log expiry, chase renewals.
2. **Failure.** Renewal lapses unnoticed; claim lands on your policy.
3. **Workaround.** Spreadsheet + email.
4. **Existing.** myCOI, TrustLayer, BCS, and an n8n template that already does Gmail → AI extract → Sheets → alerts ([18553](https://n8n.io/workflows/18553-track-vendor-insurance-cois-and-renewals-with-gmail-deepseek-sheets-discord-and-telegram/)).
5. **Verdict.** Real pain, but already solved even at the free n8n level. Low portfolio differentiation.

---

## 4. Deliverable 4 — Flagship recommendation

### Pick: **Won-but-Not-Billed Watchdog**

A reconciliation check that finds sold or delivered work that was never invoiced, across GHL and an invoicing tool.

**Why it wins**

- **Money is measurable.** "Found $X unbilled" is the clearest possible value story for an owner.
- **Fits your skills and goals.** Uses GHL, n8n, APIs, and JSON matching. Core logic is deterministic. AI is optional (e.g., writing the alert summary).
- **Real gap for small firms.** ScaleXP targets HubSpot finance teams. ServiceTitan/Harvest only check inside themselves. Public recipes create invoices but never audit for misses.
- **Grows into many projects.** Matching → exceptions → approvals → retainer changes (P2) → duplicate bills (P3.3) → payment follow-up.
- **Demo-safe.** GHL, QuickBooks, and Stripe all offer sandbox/test data.

**What would change my mind**

- Interviews show GHL agencies already bill *inside* GHL, so the gap rarely happens.
- Owners say month-end review already catches everything.
- GHL has a native "won without invoice" report I missed.
- If any of these hold → switch to **Waiting-On Tracker** (best EA career fit).

---

## 5. Deliverable 5 — Validation plan

**Who to interview (5–8 people)**

- GHL agency owners (GHL Facebook group, your client network).
- Freelance bookkeepers who serve agencies or service firms (OnlineJobsPH contacts).
- 1–2 EAs/ops assistants who handle billing handoffs.

**Non-leading questions**

1. "Walk me through what happens after a client says yes."
2. "Who sends the invoice? How do they know when to?"
3. "Tell me about the last time an invoice went out late or not at all."
4. "How did you find out?"
5. "How do you check that everything sold got billed? How long does that take?"
6. "What tools do you use for CRM, invoicing, and payments?"

**Measure in a pilot**

- Minutes spent on the current month-end check.
- Number of gaps found by the watchdog vs by the human.
- False alarms per run.

**Safe pilot rules**

- Read-only API access. No invoice creation. No emails to clients.
- Run in parallel with the current manual process for 1 month.

**Decision rule**

- **Proceed:** 3+ of 6 interviewees describe a real miss in the last 12 months.
- **Change direction:** pain exists, but they bill inside one tool (pivot to retainer-change tracking or duplicate bills).
- **Abandon:** fewer than 2 can recall any miss.

---

## 6. Deliverable 6 — Draft roadmap (finalize after approval)

Each project is small, testable, and teaches one skill.

| # | Project | Skill learned | Done when |
|---|---------|---------------|-----------|
| 1 | Model the problem with fake deals + invoices (JSON/CSV) | Data modeling | 30 deals, 28 invoices, 3 seeded gaps documented |
| 2 | Local matcher in Python | Matching logic, unit tests | Tests catch all 3 seeded gaps, 0 false alarms |
| 3 | Same matcher as an n8n Code node, fed by Webhook | Webhooks, n8n data flow | POST sample data → correct gap list returned |
| 4 | Fuzzy rules: name variants, amount tolerance, partial billing | Edge-case design | 8 edge-case tests pass |
| 5 | Pull real sandbox data: GHL test sub-account opportunities | HTTP Request, auth, pagination | Sandbox deals load into the workflow |
| 6 | Pull invoices from QuickBooks sandbox or Stripe test mode | OAuth, API differences | Invoices load and normalize |
| 7 | Findings log in Google Sheets with run IDs | Persistence, idempotency | Running twice does not duplicate findings |
| 8 | Alert + human decision (confirm / ignore / billed elsewhere) | Human-in-the-loop, Wait node | Decision saved back to the log |
| 9 | Error workflow, retries, timeouts | Reliability | Simulated API failure alerts you, no silent fail |
| 10 | Optional AI: plain-English summary of each gap | Structured AI output | Summary validated against JSON schema |
| 11 | Metrics + case study | Measuring value | Report: gaps caught, false alarms, minutes per run |

The companion app (Automation Quest) will be built in Phase 3, with missions mapped to this table.
