/**
 * NEXIS GLOBAL TECHNOLOGIES — FELLOWSHIP PROGRAM
 * Production-ready Vanilla JavaScript Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Global State & Data Store ---
  const caseStudiesData = {
    'mediscan-ai': {
      title: 'MediScan AI: Neural Diagnostic Triage Engine',
      category: 'Artificial Intelligence & Computer Vision',
      cohort: 'Cohort 2026 Fellow Capstone',
      leadMentor: 'Dr. Evelyn Vance (Senior Research Scientist, DeepMind / Nexis)',
      fellows: ['Alex Chen (UC Berkeley)', 'Priya Sharma (Georgia Tech)', 'Marcus Vance (MIT)'],
      metrics: [
        { label: 'Inference Latency', value: '18.4 ms (TensorRT)' },
        { label: 'Diagnostic Accuracy', value: '99.4% ROC-AUC' },
        { label: 'DICOM Scans Processed', value: '142,500+ Scans' },
        { label: 'Memory Footprint', value: '64% Reduction' }
      ],
      overview: 'Modern radiology workflows are constrained by heavy DICOM image sizes and delayed turnaround times. Fellows designed a distributed inference pipeline leveraging vision transformers (ViT) and TensorRT acceleration to automate preliminary nodule detection with millisecond turnaround.',
      architecture: [
        'Ingestion Layer: gRPC microservice streaming multi-slice DICOM series into an isolated processing queue.',
        'Model Layer: Custom Vision Transformer fine-tuned on anonymized chest CT telemetry with FP16 quantization.',
        'Edge Serving: NVIDIA Triton Inference Server deployed on Kubernetes with GPU autoscaling.',
        'Visualization: Zero-latency WebGL DICOM viewer supporting 3D volume reconstruction in the browser.'
      ],
      technologies: ['PyTorch', 'TensorRT', 'Triton Server', 'FastAPI', 'Docker', 'WebGL', 'PostgreSQL']
    },
    'cloudscale-engine': {
      title: 'Apex CloudScale: Multi-Region Kubernetes Autoscaler',
      category: 'Cloud Infrastructure & Distributed Systems',
      cohort: 'Cohort 2026 Fellow Capstone',
      leadMentor: 'Siddharth Roy (Staff Infrastructure Architect, Nexis)',
      fellows: ['Liam Zhao (Stanford)', 'Elena Rostova (ETH Zürich)', 'Kwame Boateng (CMU)'],
      metrics: [
        { label: 'P99 Ingress Latency', value: '12ms Global Avg' },
        { label: 'Cost Reduction', value: '38% Cloud Spend' },
        { label: 'Pods Reconciled', value: '1,420 Active' },
        { label: 'Failover Recovery', value: '< 2.4 Seconds' }
      ],
      overview: 'Traditional Horizontal Pod Autoscalers (HPA) rely on coarse CPU/memory thresholds that react late to sudden traffic bursts. Fellows built an eBPF-driven predictive autoscaler using real-time kernel network metrics and Holt-Winters forecasting.',
      architecture: [
        'Kernel Telemetry: eBPF probes tracking socket queue depth and TCP RTT without application overhead.',
        'Custom K8s Controller: Written in Go using client-go to reconcile Custom Resource Definitions (CRDs).',
        'Consensus & Mesh: HashiCorp Consul and Cilium service mesh facilitating cross-region routing failovers.',
        'Observability: Prometheus metric exporter handling 400k metrics/sec with OpenTelemetry tracing.'
      ],
      technologies: ['Go (Golang)', 'Kubernetes', 'eBPF', 'Terraform', 'Prometheus', 'Cilium', 'AWS EKS']
    },
    'sentinel-zero': {
      title: 'SentinelZero: mTLS Enclave & Behavioral Zero-Trust Proxy',
      category: 'Cybersecurity & Systems Governance',
      cohort: 'Cohort 2025 Fellow Capstone',
      leadMentor: 'Elena Rostova (Principal Security Architect, Nexis)',
      fellows: ['Sophia Patel (Waterloo)', 'Daniel Kim (KAIST)', 'Jordan Taylor (Oxford)'],
      metrics: [
        { label: 'Proxy Overhead', value: '1.8 ms (eBPF bypassed)' },
        { label: 'Audit Compliance', value: '100% SOC 2 Type II' },
        { label: 'Anomalous Threat Block', value: '99.98% Rate' },
        { label: 'Cryptographic Rotation', value: 'Every 60 Minutes' }
      ],
      overview: 'Microservice ecosystems frequently suffer from perimeter-only defense models. SentinelZero enforces hardware-rooted identity, automated SPIFFE/SPIRE x509 token rotation, and machine-learning driven API anomaly detection.',
      architecture: [
        'Hardware Attestation: AWS Nitro Enclaves and TPM 2.0 cryptographic key generation.',
        'Sidecar Proxy: High-performance Rust proxy enforcing dynamic RBAC and attribute-based access control (ABAC).',
        'Anomaly Engine: Online isolation forest algorithm scoring request payloads for exfiltration patterns.',
        'Audit Trail: Append-only cryptographic hash chain logged directly to immutable object storage.'
      ],
      technologies: ['Rust', 'SPIFFE/SPIRE', 'Envoy', 'eBPF', 'Open Policy Agent (OPA)', 'Kafka']
    },
    'ecometric-grid': {
      title: 'EcoMetric Grid: Distributed IoT Telematics & Energy Optimizer',
      category: 'Data Engineering & IoT Platforms',
      cohort: 'Cohort 2025 Fellow Capstone',
      leadMentor: 'Marcus Thorne (Director of Energy Telemetry, Nexis)',
      fellows: ['Nadia Al-Mansoor (Imperial College)', 'Thomas Wright (UT Austin)', 'Zoe Chen (NUS)'],
      metrics: [
        { label: 'Carbon Avoided', value: '-2,480 Metric Tons' },
        { label: 'Active Edge Sensors', value: '2,840 LoRaWAN' },
        { label: 'Telemetry Ingestion', value: '85,000 events/sec' },
        { label: 'Sensor Battery Life', value: '3.5+ Years' }
      ],
      overview: 'Municipal solar grids suffer from unpredictable duck-curve fluctuations. Fellows engineered an edge-to-cloud telemetry broker collecting micro-inverter metrics and dispatching predictive battery storage routines.',
      architecture: [
        'Edge Gateways: Embedded C++ firmware running on ARM Cortex nodes with LoRaWAN wireless backhaul.',
        'Ingestion Pipeline: Apache Kafka clusters buffering high-frequency power factors and temperature signals.',
        'Stream Analytics: Apache Flink jobs computing rolling kilowatt-hour balances and voltage variance.',
        'Forecasting: Time-series Prophet model predicting hourly solar irradiance and cloud cover.'
      ],
      technologies: ['C++', 'Apache Kafka', 'Apache Flink', 'TimescaleDB', 'Grafana', 'LoRaWAN', 'Python']
    },
    'finstream-core': {
      title: 'FinStream Core: Sub-Millisecond Distributed Order Matching',
      category: 'Systems Software & High-Performance Computing',
      cohort: 'Cohort 2025 Fellow Capstone',
      leadMentor: 'Julian Beck (Head of Financial Systems Architecture)',
      fellows: ['Arthur Pendelton (Columbia)', 'Mei Ling (Tsinghua)', 'Lucas Meyer (TU Munich)'],
      metrics: [
        { label: 'Execution Latency', value: '0.38 ms Mean' },
        { label: 'Order Throughput', value: '850,000 matches/sec' },
        { label: 'Daily Processed Volume', value: '$1.84 Billion USD' },
        { label: 'Data Consistency', value: 'Strict ACID / Raft' }
      ],
      overview: 'Engineered for financial derivatives settlement, FinStream Core replaces heavy database transactions with a zero-allocation, memory-mapped ring buffer and deterministic Raft consensus state machine.',
      architecture: [
        'LMAX Disruptor Pattern: Cache-line aligned circular ring buffer minimizing thread contention and context switching.',
        'Consensus Protocol: Tailored Raft implementation with batch pipelining and NVMe direct I/O journaling.',
        'Memory Optimization: Zero heap allocations on the hot path using custom arena allocators.',
        'Replay Verification: Deterministic event sourcing supporting instant audit and state restoration.'
      ],
      technologies: ['C++20', 'Linux epoll', 'Raft Consensus', 'SIMD Intrinsics', 'ZeroMQ', 'Docker']
    },
    'omnicollab-canvas': {
      title: 'OmniCollab Workspace: Real-Time CRDT Collaborative Canvas',
      category: 'Enterprise Full-Stack Architecture',
      cohort: 'Cohort 2026 Fellow Capstone',
      leadMentor: 'Sarah Jenkins (VP of Frontend Engineering, Nexis)',
      fellows: ['Kavita Rao (UC San Diego)', 'Benjamin Foster (McGill)', 'Hannah Lee (Seoul National Univ)'],
      metrics: [
        { label: 'State Sync Latency', value: '< 8.2 ms P95' },
        { label: 'Render Performance', value: 'Solid 60 FPS' },
        { label: 'Concurrent Peers', value: '150+ per Room' },
        { label: 'Merge Conflict Rate', value: '0.00% Mathematical' }
      ],
      overview: 'Modern remote engineering teams require real-time diagramming and architectural whiteboarding that operates seamlessly across unstable network connections without destructive merge conflicts.',
      architecture: [
        'Conflict-Free Replicated Data Types (CRDT): Yjs-backed state trees compiled to WebAssembly via Rust.',
        'Networking: WebRTC data channels for low-latency peer-to-peer transmission with WebSocket fallback.',
        'Rendering Engine: HTML5 Canvas powered by custom quadtree spatial indexing and offscreen canvas workers.',
        'Security: Client-side end-to-end encryption (E2EE) with ephemeral Room key derivation.'
      ],
      technologies: ['TypeScript', 'Rust (Wasm)', 'WebRTC', 'React', 'Canvas API', 'Node.js', 'Redis']
    }
  };

  const trackSyllabusData = {
    'cloud': {
      title: 'Cloud Infrastructure & Distributed Systems Track',
      summary: 'Master the design, deployment, and operation of resilient cloud-native architectures capable of serving millions of concurrent global requests.',
      weeks: [
        { phase: 'Weeks 1–3', focus: 'Linux Internals, Networking & Container Runtimes (Docker, containerd, cgroups, namespaces)' },
        { phase: 'Weeks 4–6', focus: 'Kubernetes Architecture, Custom Resource Definitions (CRDs), Helm & Service Meshes (Istio/Cilium)' },
        { phase: 'Weeks 7–9', focus: 'Infrastructure as Code (Terraform), CI/CD Automation (GitHub Actions), and Observability (Prometheus, OpenTelemetry)' },
        { phase: 'Weeks 10–12', focus: 'Capstone Pod Project: Multi-region autoscaling cluster with automated disaster recovery' }
      ],
      prereqs: 'Proficiency in at least one systems language (Go, Python, C++, or Rust); foundational understanding of TCP/IP, operating systems, and Git.'
    },
    'ai': {
      title: 'Applied AI & Machine Learning Track',
      summary: 'Advance from training isolated models to engineering production-grade machine learning systems and real-time inference pipelines.',
      weeks: [
        { phase: 'Weeks 1–3', focus: 'Deep Learning with PyTorch, Transformer Architectures & TensorRT Optimization' },
        { phase: 'Weeks 4–6', focus: 'Vector Embeddings, RAG Architectures, Vector Databases (Milvus, Qdrant) & LLM Fine-Tuning' },
        { phase: 'Weeks 7–9', focus: 'MLOps: Model Registry (MLflow), Triton Inference Server, Feature Stores & Drift Monitoring' },
        { phase: 'Weeks 10–12', focus: 'Capstone Pod Project: High-throughput medical or financial multimodal inference service' }
      ],
      prereqs: 'Strong foundation in Python, linear algebra, probability, and experience training neural networks in PyTorch or TensorFlow.'
    },
    'fullstack': {
      title: 'Enterprise Full-Stack Architecture Track',
      summary: 'Build high-performance, accessible, and mission-critical web applications with modern modular architectures.',
      weeks: [
        { phase: 'Weeks 1–3', focus: 'Advanced TypeScript, Strict Type Systems, Next.js App Router & Server Components' },
        { phase: 'Weeks 4–6', focus: 'Distributed State Synchronization, WebSockets, WebRTC, and CRDT Collaboration' },
        { phase: 'Weeks 7–9', focus: 'Micro-frontends, Web Performance Budgeting, Accessibility (WCAG AAA), and End-to-End Testing (Playwright)' },
        { phase: 'Weeks 10–12', focus: 'Capstone Pod Project: Collaborative real-time workspace with offline-first persistence' }
      ],
      prereqs: 'Solid grasp of JavaScript/TypeScript, modern HTML/CSS, React or Vue, and REST/GraphQL API fundamentals.'
    },
    'security': {
      title: 'Cybersecurity & Zero-Trust Governance Track',
      summary: 'Learn defensive and offensive systems engineering, cryptography, hardware security modules, and zero-trust perimeter defenses.',
      weeks: [
        { phase: 'Weeks 1–3', focus: 'Applied Cryptography, Public Key Infrastructure (PKI), TLS 1.3 & SPIFFE/SPIRE Standards' },
        { phase: 'Weeks 4–6', focus: 'Threat Modeling (STRIDE), eBPF Kernel Security Probing, and Open Policy Agent (OPA)' },
        { phase: 'Weeks 7–9', focus: 'Cloud Security Posture Management, Identity Federation (OAuth 2.1, SAML), and SOC 2 / ISO Compliance' },
        { phase: 'Weeks 10–12', focus: 'Capstone Pod Project: Automated zero-trust proxy with real-time behavioral anomaly scoring' }
      ],
      prereqs: 'Understanding of networking protocols, OS security primitives, basic cryptography, and scripting in Go or Python.'
    },
    'data': {
      title: 'Data Engineering & Real-Time Analytics Track',
      summary: 'Architect distributed streaming backbones and analytical warehouses processing terabytes of event data with low latencies.',
      weeks: [
        { phase: 'Weeks 1–3', focus: 'Distributed Messaging (Apache Kafka, Redpanda), Partitioning Strategies & Exactly-Once Semantics' },
        { phase: 'Weeks 4–6', focus: 'Stream Processing Engines (Apache Flink, Spark Streaming) & State Management' },
        { phase: 'Weeks 7–9', focus: 'Modern Data Stack: dbt, Snowflake / ClickHouse, Iceberg Tables & Data Governance' },
        { phase: 'Weeks 10–12', focus: 'Capstone Pod Project: High-frequency IoT telematics broker with streaming analytics' }
      ],
      prereqs: 'Comfortable with SQL, relational database design, Python or Java/Scala, and foundational data structures.'
    },
    'systems': {
      title: 'Systems Software & High-Performance Computing Track',
      summary: 'Dive deep into memory layout, hardware cache lines, concurrent programming, and microsecond performance tuning.',
      weeks: [
        { phase: 'Weeks 1–3', focus: 'Modern C++20 / Rust Memory Safety, RAII, Concurrency Primitives & Lock-Free Structures' },
        { phase: 'Weeks 4–6', focus: 'Linux Kernel System Calls, epoll, io_uring, and High-Throughput Network Socket Programming' },
        { phase: 'Weeks 7–9', focus: 'Profiling & Benchmarking: perf, Valgrind, Flamegraphs, Cache Misses, and SIMD Vectorization' },
        { phase: 'Weeks 10–12', focus: 'Capstone Pod Project: Ultra-low latency matching engine or deterministic consensus ledger' }
      ],
      prereqs: 'Experience with C, C++, or Rust; strong comprehension of memory hierarchy, operating systems, and computer architecture.'
    }
  };

  // --- 2. Sticky Navigation & Scroll Spy ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header shadow on scroll
    if (scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scroll spy for navigation
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 3. Mobile Navigation Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking a link on mobile
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });
  }

  // --- 4. Dark / Light Theme Toggle ---
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('nexis_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('nexis_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // --- 5. Animated Number Counter for Stats ---
  const statsElements = document.querySelectorAll('.stat-number[data-target]');
  let statsCounted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;
        statsElements.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const prefix = stat.getAttribute('data-prefix') || '';
          const suffix = stat.getAttribute('data-suffix') || '';
          const decimals = parseInt(stat.getAttribute('data-decimals') || '0', 10);
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;

            stat.textContent = prefix + currentVal.toFixed(decimals) + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              stat.textContent = prefix + target.toFixed(decimals) + suffix;
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.hero-stats-grid');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // --- 6. Projects Filter & Search System ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearch');

  let activeCategory = 'all';
  let activeSearchTerm = '';

  function filterProjects() {
    let visibleCount = 0;
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const desc = card.querySelector('.project-summary').textContent.toLowerCase();
      const tech = card.getAttribute('data-tech').toLowerCase();

      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = activeSearchTerm === '' || 
        title.includes(activeSearchTerm) || 
        desc.includes(activeSearchTerm) || 
        tech.includes(activeSearchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const noResultsMsg = document.getElementById('noProjectsMessage');
    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchTerm = e.target.value.trim().toLowerCase();
      filterProjects();
    });
  }

  // --- 7. Modal System (Case Studies & Track Details) ---
  const modalBackdrop = document.getElementById('universalModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal(title, htmlContent) {
    if (!modalBackdrop) return;
    modalTitle.textContent = title;
    modalContent.innerHTML = htmlContent;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Attach Case Study click handlers
  document.querySelectorAll('.btn-case-study').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      const data = caseStudiesData[projectId];

      if (!data) return;

      const contentHtml = `
        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
            <span style="font-size:0.8125rem;font-weight:700;color:var(--primary-accent);background:var(--badge-bg);padding:0.3rem 0.75rem;border-radius:9999px;border:1px solid var(--badge-border);">
              ${data.category}
            </span>
            <span style="font-family:var(--font-mono);font-size:0.8125rem;color:var(--text-light);">${data.cohort}</span>
          </div>

          <p style="font-size:1.05rem;line-height:1.65;color:var(--text-main);">${data.overview}</p>

          <div>
            <h4 style="font-size:0.9375rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-light);margin-bottom:0.75rem;">Key Performance Benchmarks</h4>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:1rem;">
              ${data.metrics.map(m => `
                <div style="background:var(--bg-alt);padding:1rem;border-radius:8px;border:1px solid var(--border-main);">
                  <div style="font-size:1.25rem;font-weight:800;color:var(--text-main);">${m.value}</div>
                  <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">${m.label}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h4 style="font-size:0.9375rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-light);margin-bottom:0.75rem;">System Architecture Breakdown</h4>
            <ul style="list-style:disc;padding-left:1.25rem;display:flex;flex-direction:column;gap:0.6rem;color:var(--text-muted);font-size:0.9375rem;line-height:1.6;">
              ${data.architecture.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-top:1rem;border-top:1px solid var(--border-main);">
            <div>
              <div style="font-size:0.75rem;text-transform:uppercase;font-weight:700;color:var(--text-light);">Contributing Fellows</div>
              <div style="font-size:0.875rem;font-weight:600;color:var(--text-main);margin-top:0.25rem;">${data.fellows.join(' • ')}</div>
            </div>
            <div>
              <div style="font-size:0.75rem;text-transform:uppercase;font-weight:700;color:var(--text-light);">Principal Mentor</div>
              <div style="font-size:0.875rem;font-weight:600;color:var(--primary-accent);margin-top:0.25rem;">${data.leadMentor}</div>
            </div>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;padding-top:0.5rem;">
            ${data.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      openModal(data.title, contentHtml);
    });
  });

  // Attach Track Curriculum Syllabus click handlers
  document.querySelectorAll('.btn-track-syllabus').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const trackId = button.getAttribute('data-track');
      const track = trackSyllabusData[trackId];

      if (!track) return;

      const contentHtml = `
        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          <p style="font-size:1.05rem;line-height:1.65;color:var(--text-main);">${track.summary}</p>

          <div>
            <h4 style="font-size:0.9375rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-light);margin-bottom:1rem;">12-Week Immersion Syllabus</h4>
            <div style="display:flex;flex-direction:column;gap:0.85rem;">
              ${track.weeks.map(w => `
                <div style="background:var(--bg-alt);padding:1rem 1.25rem;border-radius:8px;border:1px solid var(--border-main);">
                  <span style="display:inline-block;font-size:0.75rem;font-weight:700;font-family:var(--font-mono);color:var(--primary-accent);background:var(--badge-bg);padding:0.2rem 0.5rem;border-radius:4px;margin-bottom:0.4rem;">
                    ${w.phase}
                  </span>
                  <div style="font-size:0.9375rem;color:var(--text-main);line-height:1.5;">${w.focus}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="background:rgba(37,99,235,0.06);border:1px solid var(--badge-border);padding:1.25rem;border-radius:8px;">
            <div style="font-size:0.8125rem;font-weight:700;color:var(--primary-accent);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.35rem;">Candidate Prerequisites</div>
            <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.6;">${track.prereqs}</p>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:1rem;padding-top:1rem;border-top:1px solid var(--border-main);">
            <button class="btn btn-primary" onclick="document.getElementById('universalModal').classList.remove('open');document.body.style.overflow='';document.getElementById('contact').scrollIntoView({behavior:'smooth'});document.getElementById('preferredTrack').value='${trackId}';">
              Apply for this Track →
            </button>
          </div>
        </div>
      `;

      openModal(track.title, contentHtml);
    });
  });

  // --- 8. Interactive FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other open items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherAnswer = other.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    firstItem.classList.add('active');
    const firstAnswer = firstItem.querySelector('.faq-answer');
    if (firstAnswer) {
      firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
    }
  }

  // --- 9. Contact & Application Form Validation & Submission ---
  const fellowshipForm = document.getElementById('fellowshipForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (fellowshipForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('emailAddress');
    const trackSelect = document.getElementById('preferredTrack');
    const subjectInput = document.getElementById('inquirySubject');
    const messageInput = document.getElementById('inquiryMessage');
    const termsCheckbox = document.getElementById('termsAgreement');
    const submitBtn = document.getElementById('submitApplicationBtn');

    // Email validation helper
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setFieldError(field, isError) {
      const group = field.closest('.form-group');
      if (group) {
        if (isError) {
          group.classList.add('has-error');
          field.classList.add('error');
        } else {
          group.classList.remove('has-error');
          field.classList.remove('error');
        }
      }
    }

    // Real-time input clearing on typing
    [fullNameInput, emailInput, trackSelect, subjectInput, messageInput].forEach(field => {
      if (field) {
        field.addEventListener('input', () => {
          if (field.value.trim() !== '') {
            setFieldError(field, false);
          }
        });
      }
    });

    fellowshipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Validate Full Name
      if (!fullNameInput.value.trim()) {
        setFieldError(fullNameInput, true);
        hasError = true;
      } else {
        setFieldError(fullNameInput, false);
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        setFieldError(emailInput, true);
        hasError = true;
      } else {
        setFieldError(emailInput, false);
      }

      // Validate Track
      if (!trackSelect.value) {
        setFieldError(trackSelect, true);
        hasError = true;
      } else {
        setFieldError(trackSelect, false);
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        setFieldError(subjectInput, true);
        hasError = true;
      } else {
        setFieldError(subjectInput, false);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 20) {
        setFieldError(messageInput, true);
        hasError = true;
      } else {
        setFieldError(messageInput, false);
      }

      // Validate Terms Checkbox
      if (!termsCheckbox.checked) {
        alert('Please acknowledge the fellowship guidelines and privacy terms before submitting.');
        hasError = true;
      }

      if (hasError) {
        showToast('Please correct the highlighted fields before submitting.', 'error');
        return;
      }

      // Simulation of async submission
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation:spin 1s linear infinite;width:18px;height:18px;display:inline-block;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle style="opacity:0.25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path style="opacity:0.75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        Transmitting Application...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Show inline alert & toast
        if (formSuccessAlert) {
          const appRef = 'NX-' + Math.floor(100000 + Math.random() * 900000);
          formSuccessAlert.innerHTML = `
            <strong>Application Received!</strong> Reference <code>${appRef}</code>. A confirmation package has been queued for <em>${emailInput.value}</em>.
          `;
          formSuccessAlert.style.display = 'flex';
        }

        showToast('Application successfully submitted! Admissions will reach out shortly.');
        fellowshipForm.reset();

        // Scroll smoothly to confirmation
        formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1200);
    });
  }

  // --- 10. Newsletter Form Handling ---
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showToast(`Subscribed! Tech dispatches will be delivered to ${input.value.trim()}.`);
        input.value = '';
      }
    });
  }

  // --- 11. Toast Notification Helper ---
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'error') {
      toast.style.borderLeftColor = 'var(--rose-500)';
    }

    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- 12. Brochure Download Trigger ---
  const downloadBrochureBtns = document.querySelectorAll('.btn-download-brochure');
  downloadBrochureBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Generating 2027 Cohort Curriculum & Technical Guide (PDF)...');
      setTimeout(() => {
        showToast('Download started: Nexis_Fellowship_Syllabus_2027.pdf');
      }, 1500);
    });
  });

});
