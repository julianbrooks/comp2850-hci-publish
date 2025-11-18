// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Home</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Week 6 — Intro (UI + ethics foundations)</li><li class="chapter-item expanded "><a href="wk06/wk6-lab1-html-css-htmx.html"><strong aria-hidden="true">1.</strong> Lab 1: Server-first foundations with HTMX</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk06/wk6-lab1-student-guide.html"><strong aria-hidden="true">1.1.</strong> Student Guide: Understanding Server-First Architecture</a></li></ol></li><li class="chapter-item expanded "><a href="wk06/wk6-lab2-needs-consent-backlog.html"><strong aria-hidden="true">2.</strong> Lab 2: Needs-finding, consent &amp; backlog</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk06/wk6-lab2-student-guide.html"><strong aria-hidden="true">2.1.</strong> Student Guide: Needs-Finding &amp; Research Ethics</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Week 7 — Ethics in practice + accessibility</li><li class="chapter-item expanded "><a href="wk07/wk7-lab1-ethics-inline-edit.html"><strong aria-hidden="true">3.</strong> Lab 1: Ethics overlay + accessible inline edit</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk07/wk7-lab1-student-guide.html"><strong aria-hidden="true">3.1.</strong> Student Guide: Ethics &amp; Inline Edit</a></li></ol></li><li class="chapter-item expanded "><a href="wk07/wk7-lab2-audit-backlog-fix.html"><strong aria-hidden="true">4.</strong> Lab 2: Accessibility audit, backlog, inclusive fix</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk07/wk7-lab2-student-guide.html"><strong aria-hidden="true">4.1.</strong> Student Guide: Accessibility Audit &amp; Inclusive Fix</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Week 8 — Prototyping &amp; constraints</li><li class="chapter-item expanded "><a href="wk08/wk8-lab1-prototyping-constraints.html"><strong aria-hidden="true">5.</strong> Lab 1: Partials, pagination, filtering constraints</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk08/wk8-lab1-student-guide.html"><strong aria-hidden="true">5.1.</strong> Student Guide: Code Reading &amp; Documentation</a></li></ol></li><li class="chapter-item expanded "><a href="wk08/wk8-lab2-routing-nojs-tradeoffs.html"><strong aria-hidden="true">6.</strong> Lab 2: Routing parity, no-JS verification, trade-offs</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk08/wk8-lab2-student-guide.html"><strong aria-hidden="true">6.1.</strong> Student Guide: Validation &amp; No-JS Parity</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Week 9 — Evaluation &amp; instrumentation</li><li class="chapter-item expanded "><a href="wk09/wk9-lab1-eval-plan-instrumentation.html"><strong aria-hidden="true">7.</strong> Lab 1: Evaluation plan, metrics, instrumentation</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk09/wk9-lab1-student-guide.html"><strong aria-hidden="true">7.1.</strong> Student Guide: Evaluation Planning &amp; Instrumentation</a></li></ol></li><li class="chapter-item expanded "><a href="wk09/wk9-lab2-pilots-debrief-draft.html"><strong aria-hidden="true">8.</strong> Lab 2: Pilots, debrief, Task 1 draft pack</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk09/wk9-lab2-student-guide.html"><strong aria-hidden="true">8.1.</strong> Student Guide: Run Pilots &amp; Draft Task 1</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Week 10 — Analysis &amp; redesign</li><li class="chapter-item expanded "><a href="wk10/wk10-lab1-analysis-prioritisation.html"><strong aria-hidden="true">9.</strong> Lab 1: Analyse metrics, prioritise redesign</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk10/wk10-lab1-student-guide.html"><strong aria-hidden="true">9.1.</strong> Student Guide: Analyse Metrics &amp; Prioritise Redesign</a></li></ol></li><li class="chapter-item expanded "><a href="wk10/wk10-lab2-redesign-reverify-package.html"><strong aria-hidden="true">10.</strong> Lab 2: Inclusive redesign, re-verify, Task 2 package</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk10/wk10-lab2-student-guide.html"><strong aria-hidden="true">10.1.</strong> Student Guide: Redesign, Re-Verify &amp; Package Task 2</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Week 11 — Studio crit &amp; wrap-up</li><li class="chapter-item expanded "><a href="wk11/wk11-lab1-studio-crit.html"><strong aria-hidden="true">11.</strong> Lab 1: Evidence-led studio crit</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk11/wk11-lab1-student-guide.html"><strong aria-hidden="true">11.1.</strong> Student Guide: Evidence-Led Studio Crit</a></li></ol></li><li class="chapter-item expanded "><a href="wk11/wk11-lab2-wrapup-portfolio.html"><strong aria-hidden="true">12.</strong> Lab 2: Wrap-up, portfolio, submission readiness</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="wk11/wk11-lab2-student-guide.html"><strong aria-hidden="true">12.1.</strong> Student Guide: Wrap-Up, Portfolio &amp; Submission</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Assessment</li><li class="chapter-item expanded "><a href="assessment/overview.html"><strong aria-hidden="true">13.</strong> Assessment Overview</a></li><li class="chapter-item expanded "><a href="assessment/task1.html"><strong aria-hidden="true">14.</strong> Task 1: Evaluation &amp; Findings</a></li><li class="chapter-item expanded "><a href="assessment/task2.html"><strong aria-hidden="true">15.</strong> Task 2: Redesign &amp; Verification</a></li><li class="chapter-item expanded "><a href="assessment/marking-rubric.html"><strong aria-hidden="true">16.</strong> Marking Rubric</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">References</li><li class="chapter-item expanded "><a href="references/glossary.html"><strong aria-hidden="true">17.</strong> Glossary</a></li><li class="chapter-item expanded "><a href="references/learning-outcomes.html"><strong aria-hidden="true">18.</strong> Learning Outcomes Reference</a></li><li class="chapter-item expanded "><a href="references/server-first.html"><strong aria-hidden="true">19.</strong> Server-First Architecture</a></li><li class="chapter-item expanded "><a href="references/server-first-codespaces.html"><strong aria-hidden="true">20.</strong> Server-First in Codespaces</a></li><li class="chapter-item expanded "><a href="references/pebble-intro.html"><strong aria-hidden="true">21.</strong> Pebble Templates Primer</a></li><li class="chapter-item expanded "><a href="references/pebble-cheatsheet.html"><strong aria-hidden="true">22.</strong> Pebble Cheatsheet</a></li><li class="chapter-item expanded "><a href="references/htmx-patterns.html"><strong aria-hidden="true">23.</strong> HTMX Patterns &amp; Progressive Enhancement</a></li><li class="chapter-item expanded "><a href="references/example-accessible-inline-edit.html"><strong aria-hidden="true">24.</strong> Example: Accessible Inline Edit</a></li><li class="chapter-item expanded "><a href="references/accessibility-testing.html"><strong aria-hidden="true">25.</strong> Accessibility Testing Guide</a></li><li class="chapter-item expanded "><a href="references/assistive-testing-checklist.html"><strong aria-hidden="true">26.</strong> Assistive Testing Checklist</a></li><li class="chapter-item expanded "><a href="references/privacy-by-design.html"><strong aria-hidden="true">27.</strong> Privacy by Design</a></li><li class="chapter-item expanded "><a href="references/consent-pii-faq.html"><strong aria-hidden="true">28.</strong> Consent &amp; PII FAQ</a></li><li class="chapter-item expanded "><a href="references/evaluation-guide.html"><strong aria-hidden="true">29.</strong> Evaluation Metrics Guide</a></li><li class="chapter-item expanded "><a href="references/screenshot-guide.html"><strong aria-hidden="true">30.</strong> Screenshot Evidence Guide</a></li><li class="chapter-item expanded "><a href="references/process-visuals.html"><strong aria-hidden="true">31.</strong> Process Visuals</a></li><li class="chapter-item expanded "><a href="resources/code-resources.html"><strong aria-hidden="true">32.</strong> Starter Repository</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
