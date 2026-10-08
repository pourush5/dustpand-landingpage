/**
 * DustPan Official Landing Page Script
 * Interactive Simulation, Code Viewer, FAQ Accordion, and Dynamic Utilities
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Simulation Datasets
  // ==========================================================================

  const simulationData = {
    downloads: {
      totalSize: '42.8 GB',
      totalCount: '18 files indexed',
      deleteSize: '14.6 GB',
      deleteCount: '7 candidates',
      backupSize: '18.2 GB',
      backupCount: '5 files',
      dupSize: '6.4 GB',
      dupCount: '3 duplicate sets',
      files: [
        {
          name: 'OS_Distribution_Install_x64.iso',
          path: 'C:\\Users\\user\\Downloads\\OS_Distribution_Install_x64.iso',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '5.8 GB',
          bytes: 6228541440,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Local NVMe'
        },
        {
          name: 'Video_Studio_Editor_Suite.zip',
          path: 'C:\\Users\\user\\Downloads\\Video_Studio_Editor_Suite.zip',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '4.2 GB',
          bytes: 4509715660,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'Video_Studio_Editor_Suite (1).zip',
          path: 'C:\\Users\\user\\Downloads\\Video_Studio_Editor_Suite (1).zip',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '4.2 GB',
          bytes: 4509715660,
          age: 'Stale (1-3yr)',
          action: 'Duplicate Match',
          actionType: 'duplicate',
          status: 'Exact SHA-256'
        },
        {
          name: 'Gameplay_4K_60FPS_Render.mp4',
          path: 'C:\\Users\\user\\Downloads\\Gameplay_4K_60FPS_Render.mp4',
          category: 'Video / Media',
          categoryClass: 'badge-video',
          size: '8.4 GB',
          bytes: 9019431320,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Local NVMe'
        },
        {
          name: 'IDE_Developer_Studio_Setup.exe',
          path: 'C:\\Users\\user\\Downloads\\IDE_Developer_Studio_Setup.exe',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '1.2 GB',
          bytes: 1288490188,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: '3D_Animation_Suite_Setup.msi',
          path: 'C:\\Users\\user\\Downloads\\3D_Animation_Suite_Setup.msi',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '345 MB',
          bytes: 361758720,
          age: 'Aging (6-12mo)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'Company_Financial_Report_Q3.pdf',
          path: 'C:\\Users\\user\\Downloads\\Company_Financial_Report_Q3.pdf',
          category: 'Documents',
          categoryClass: 'badge-doc',
          size: '42 MB',
          bytes: 44040192,
          age: 'Fresh (<30d)',
          action: 'Retain',
          actionType: 'retain',
          status: 'Protected'
        },
        {
          name: 'Project_Archive_Backup_2022.tar.gz',
          path: 'C:\\Users\\user\\Downloads\\Project_Archive_Backup_2022.tar.gz',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '5.6 GB',
          bytes: 6012954214,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Local NVMe'
        },
        {
          name: 'Project_Archive_Backup_2022_copy.tar.gz',
          path: 'C:\\Users\\user\\Downloads\\Project_Archive_Backup_2022_copy.tar.gz',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '5.6 GB',
          bytes: 6012954214,
          age: 'Archive (>3yr)',
          action: 'Duplicate Match',
          actionType: 'duplicate',
          status: 'Exact SHA-256'
        },
        {
          name: 'Graphics_Display_Driver_x64.exe',
          path: 'C:\\Users\\user\\Downloads\\Graphics_Display_Driver_x64.exe',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '680 MB',
          bytes: 713031680,
          age: 'Aging (6-12mo)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'Broadcaster_Studio_Installer.exe',
          path: 'C:\\Users\\user\\Downloads\\Broadcaster_Studio_Installer.exe',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '138 MB',
          bytes: 144703488,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'Hypervisor_Virtualization_Setup.exe',
          path: 'C:\\Users\\user\\Downloads\\Hypervisor_Virtualization_Setup.exe',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '112 MB',
          bytes: 117440512,
          age: 'Aging (6-12mo)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'System_Disk_Image_x64.iso',
          path: 'C:\\Users\\user\\Downloads\\System_Disk_Image_x64.iso',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '5.4 GB',
          bytes: 5798205849,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'Podcast_Episode_Raw_Audio.wav',
          path: 'C:\\Users\\user\\Downloads\\Podcast_Episode_Raw_Audio.wav',
          category: 'Video / Media',
          categoryClass: 'badge-video',
          size: '1.4 GB',
          bytes: 1503238553,
          age: 'Fresh (<30d)',
          action: 'Retain',
          actionType: 'retain',
          status: 'Recent Project'
        },
        {
          name: 'GameEngine_Environment_Assets.zip',
          path: 'C:\\Users\\user\\Downloads\\GameEngine_Environment_Assets.zip',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '2.8 GB',
          bytes: 3006477107,
          age: 'Aging (6-12mo)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Local NVMe'
        },
        {
          name: 'GameEngine_Environment_Assets (1).zip',
          path: 'C:\\Users\\user\\Downloads\\GameEngine_Environment_Assets (1).zip',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '2.8 GB',
          bytes: 3006477107,
          age: 'Aging (6-12mo)',
          action: 'Duplicate Match',
          actionType: 'duplicate',
          status: 'Exact SHA-256'
        },
        {
          name: 'Design_System_UI_Export.sketch',
          path: 'C:\\Users\\user\\Downloads\\Design_System_UI_Export.sketch',
          category: 'Documents',
          categoryClass: 'badge-doc',
          size: '280 MB',
          bytes: 293601280,
          age: 'Recent (1-6mo)',
          action: 'Retain',
          actionType: 'retain',
          status: 'In Use'
        },
        {
          name: 'CloudSync_Marketing_Media_Vault.zip',
          path: 'C:\\Users\\user\\Downloads\\CloudSync_Marketing_Media_Vault.zip',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '18.4 GB',
          bytes: 19756849561,
          age: 'Stale (1-3yr)',
          action: 'Skipped (Cloud-Only)',
          actionType: 'cloud',
          status: 'Reparse Guard'
        }
      ]
    },

    video: {
      totalSize: '118.5 GB',
      totalCount: '24 files indexed',
      deleteSize: '46.2 GB',
      deleteCount: '9 candidates',
      backupSize: '62.0 GB',
      backupCount: '11 files',
      dupSize: '19.8 GB',
      dupCount: '4 duplicate sets',
      files: [
        {
          name: 'Commercial_Raw_Footage_4K.mov',
          path: 'D:\\Projects\\Video\\Commercial_Raw_Footage_4K.mov',
          category: 'Video / Media',
          categoryClass: 'badge-video',
          size: '28.5 GB',
          bytes: 30601642967,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Local NVMe'
        },
        {
          name: 'Commercial_Raw_Footage_4K_copy.mov',
          path: 'D:\\Projects\\Video\\RenderExport\\Commercial_Raw_Footage_4K_copy.mov',
          category: 'Video / Media',
          categoryClass: 'badge-video',
          size: '28.5 GB',
          bytes: 30601642967,
          age: 'Archive (>3yr)',
          action: 'Duplicate Match',
          actionType: 'duplicate',
          status: 'Exact SHA-256'
        },
        {
          name: 'VideoEditor_Scratch_Cache_v1.tmp',
          path: 'D:\\Projects\\Video\\VideoEditor_Scratch_Cache_v1.tmp',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '14.2 GB',
          bytes: 15247133900,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Stale Cache'
        },
        {
          name: 'MotionGraphics_Cache_FrameData.cch',
          path: 'D:\\Projects\\Video\\MotionGraphics_Cache_FrameData.cch',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '12.8 GB',
          bytes: 13743895347,
          age: 'Aging (6-12mo)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Stale Cache'
        },
        {
          name: 'Documentary_Final_Master.mp4',
          path: 'D:\\Projects\\Video\\Documentary_Final_Master.mp4',
          category: 'Video / Media',
          categoryClass: 'badge-video',
          size: '18.4 GB',
          bytes: 19756849561,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Master File'
        },
        {
          name: 'Physics_Ocean_Fluid_Simulation.bphys',
          path: 'D:\\Projects\\Video\\Physics_Ocean_Fluid_Simulation.bphys',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '9.6 GB',
          bytes: 10307921510,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Simulation Bake'
        },
        {
          name: 'Raw_Interviews_CardB_Take4.mkv',
          path: 'D:\\Projects\\Video\\Raw_Interviews_CardB_Take4.mkv',
          category: 'Video / Media',
          categoryClass: 'badge-video',
          size: '6.5 GB',
          bytes: 6979321856,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Local NVMe'
        }
      ]
    },

    developer: {
      totalSize: '64.2 GB',
      totalCount: '15 files indexed',
      deleteSize: '22.4 GB',
      deleteCount: '6 candidates',
      backupSize: '34.8 GB',
      backupCount: '7 files',
      dupSize: '9.2 GB',
      dupCount: '2 duplicate sets',
      files: [
        {
          name: 'Dev_Virtual_Environment.vhdx',
          path: 'C:\\VMs\\Dev_Virtual_Environment.vhdx',
          category: 'Disk Image / VM',
          categoryClass: 'badge-disk',
          size: '22.8 GB',
          bytes: 24482329395,
          age: 'Archive (>3yr)',
          action: 'To Backup',
          actionType: 'backup',
          status: 'Virtual Disk'
        },
        {
          name: 'Container_Subsystem_Disk.tar',
          path: 'C:\\Users\\user\\AppData\\Local\\Container\\subsystem_disk.tar',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '14.5 GB',
          bytes: 15569256448,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Orphan Image'
        },
        {
          name: 'Linux_Distribution_Image_x64.iso',
          path: 'C:\\ISOs\\Linux_Distribution_Image_x64.iso',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '4.6 GB',
          bytes: 4939212390,
          age: 'Stale (1-3yr)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        },
        {
          name: 'Linux_Distribution_Image_x64 (1).iso',
          path: 'C:\\ISOs\\backup\\Linux_Distribution_Image_x64.iso',
          category: 'Installers / ISO',
          categoryClass: 'badge-disk',
          size: '4.6 GB',
          bytes: 4939212390,
          age: 'Stale (1-3yr)',
          action: 'Duplicate Match',
          actionType: 'duplicate',
          status: 'Exact SHA-256'
        },
        {
          name: 'Mobile_SDK_Build_Tools.zip',
          path: 'C:\\Tools\\Mobile_SDK_Build_Tools.zip',
          category: 'Archive',
          categoryClass: 'badge-archive',
          size: '1.2 GB',
          bytes: 1288490188,
          age: 'Aging (6-12mo)',
          action: 'To Delete',
          actionType: 'delete',
          status: 'Local NVMe'
        }
      ]
    }
  };

  // ==========================================================================
  // 2. State & DOM Elements
  // ==========================================================================

  let currentProfileKey = 'downloads';
  let currentActiveTab = 'all';
  let isScanning = false;

  const profileSelect = document.getElementById('demoProfileSelect');
  const runBtn = document.getElementById('demoRunBtn');
  const resetBtn = document.getElementById('demoResetBtn');
  const progressWrap = document.getElementById('demoProgressWrap');
  const progressText = document.getElementById('demoProgressText');
  const progressPercent = document.getElementById('demoProgressPercent');
  const progressFill = document.getElementById('demoProgressFill');

  const demoValTotal = document.getElementById('demoValTotal');
  const demoValCount = document.getElementById('demoValCount');
  const demoValDelete = document.getElementById('demoValDelete');
  const demoValDeleteCount = document.getElementById('demoValDeleteCount');
  const demoValBackup = document.getElementById('demoValBackup');
  const demoValBackupCount = document.getElementById('demoValBackupCount');
  const demoValDuplicate = document.getElementById('demoValDuplicate');
  const demoValDupCount = document.getElementById('demoValDupCount');

  const tabBtns = document.querySelectorAll('.demo-tab-btn');
  const tabCountAll = document.getElementById('tabCountAll');
  const tabCountDelete = document.getElementById('tabCountDelete');
  const tabCountBackup = document.getElementById('tabCountBackup');
  const tabCountDup = document.getElementById('tabCountDup');

  const demoTableBody = document.getElementById('demoTableBody');
  const demoSelectAll = document.getElementById('demoSelectAll');

  const btnExportScript = document.getElementById('btnDemoExportScript');
  const btnStage = document.getElementById('btnDemoStage');
  const btnCsv = document.getElementById('btnDemoCsv');

  const outputCard = document.getElementById('outputPreviewCard');
  const outputTitle = document.getElementById('outputTitle');
  const outputCode = document.getElementById('outputCodeSnippet');
  const btnCopyOutput = document.getElementById('btnCopyDemoOutput');

  // ==========================================================================
  // 3. Render Simulated Table & Stats
  // ==========================================================================

  function renderSimulation(profileKey, tabKey = 'all') {
    const profile = simulationData[profileKey];
    if (!profile) return;

    // Update KPI metrics
    demoValTotal.textContent = profile.totalSize;
    demoValCount.textContent = profile.totalCount;
    demoValDelete.textContent = profile.deleteSize;
    demoValDeleteCount.textContent = profile.deleteCount;
    demoValBackup.textContent = profile.backupSize;
    demoValBackupCount.textContent = profile.backupCount;
    demoValDuplicate.textContent = profile.dupSize;
    demoValDupCount.textContent = profile.dupCount;

    // Calculate tab badge counts
    const totalCount = profile.files.length;
    const deleteCount = profile.files.filter(f => f.actionType === 'delete').length;
    const backupCount = profile.files.filter(f => f.actionType === 'backup').length;
    const dupCount = profile.files.filter(f => f.actionType === 'duplicate').length;

    tabCountAll.textContent = totalCount;
    tabCountDelete.textContent = deleteCount;
    tabCountBackup.textContent = backupCount;
    tabCountDup.textContent = dupCount;

    // Filter files based on tab
    let visibleFiles = profile.files;
    if (tabKey === 'delete') {
      visibleFiles = profile.files.filter(f => f.actionType === 'delete');
    } else if (tabKey === 'backup') {
      visibleFiles = profile.files.filter(f => f.actionType === 'backup');
    } else if (tabKey === 'duplicate') {
      visibleFiles = profile.files.filter(f => f.actionType === 'duplicate');
    }

    // Build rows
    demoTableBody.innerHTML = '';
    if (visibleFiles.length === 0) {
      demoTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-dim);">No files match the "${tabKey}" filter criteria.</td></tr>`;
      return;
    }

    visibleFiles.forEach((file, index) => {
      const tr = document.createElement('tr');
      const actionBadgeClass = file.actionType === 'delete' ? 'badge-rose' :
                               file.actionType === 'backup' ? 'badge-amber' :
                               file.actionType === 'duplicate' ? 'badge-cyan' :
                               file.actionType === 'cloud' ? 'badge-cyan' : 'badge-emerald';

      tr.innerHTML = `
        <td><input type="checkbox" class="file-chk" data-index="${index}" checked></td>
        <td>
          <div class="file-name-cell">
            <span class="file-icon-badge ${file.categoryClass}">📄</span>
            <div>
              <div>${escapeHtml(file.name)}</div>
              <div class="file-path-sub">${escapeHtml(file.path)}</div>
            </div>
          </div>
        </td>
        <td><span class="badge ${file.categoryClass}">${escapeHtml(file.category)}</span></td>
        <td style="font-family: var(--font-mono); font-weight: 600; color: #fff;">${file.size}</td>
        <td>${file.age}</td>
        <td><span class="badge ${actionBadgeClass}">${file.action}</span></td>
        <td><span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim);">${file.status}</span></td>
      `;
      demoTableBody.appendChild(tr);
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Initial render
  renderSimulation(currentProfileKey, currentActiveTab);

  // Profile select change
  profileSelect.addEventListener('change', (e) => {
    currentProfileKey = e.target.value;
    outputCard.classList.remove('open');
    renderSimulation(currentProfileKey, currentActiveTab);
  });

  // Tab buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentActiveTab = btn.getAttribute('data-tab');
      renderSimulation(currentProfileKey, currentActiveTab);
    });
  });

  // Select all checkbox
  demoSelectAll.addEventListener('change', (e) => {
    const chks = demoTableBody.querySelectorAll('.file-chk');
    chks.forEach(chk => { chk.checked = e.target.checked; });
  });

  // ==========================================================================
  // 4. Simulated Scan Flow
  // ==========================================================================

  runBtn.addEventListener('click', () => {
    if (isScanning) return;
    isScanning = true;
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
      Scanning...
    `;
    progressWrap.classList.add('active');

    const steps = [
      { pct: 15, msg: 'Binding Win32 Mutex & scanning root folders...' },
      { pct: 35, msg: 'Evaluating Win32 reparse flags (FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS)...' },
      { pct: 60, msg: 'Grouping by file size & computing 64KB SHA-256 header hashes...' },
      { pct: 85, msg: 'Verifying full payloads & sorting age brackets...' },
      { pct: 100, msg: 'Analysis complete! 100% Loopback safe.' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        progressFill.style.width = `${step.pct}%`;
        progressPercent.textContent = `${step.pct}%`;
        progressText.textContent = step.msg;
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          isScanning = false;
          runBtn.disabled = false;
          runBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Re-Run Triage Analysis
          `;
          renderSimulation(currentProfileKey, currentActiveTab);
          setTimeout(() => {
            progressWrap.classList.remove('active');
          }, 1500);
        }, 500);
      }
    }, 450);
  });

  resetBtn.addEventListener('click', () => {
    outputCard.classList.remove('open');
    progressWrap.classList.remove('active');
    renderSimulation(currentProfileKey, 'all');
    tabBtns.forEach(b => b.classList.remove('active'));
    document.getElementById('tabAll').classList.add('active');
    currentActiveTab = 'all';
  });

  // ==========================================================================
  // 5. Artifact Generators (Robocopy Script, Manifest, CSV)
  // ==========================================================================

  // Generate Robocopy Script
  btnExportScript.addEventListener('click', () => {
    const profile = simulationData[currentProfileKey];
    const backupCandidates = profile.files.filter(f => f.actionType === 'backup');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

    let script = `@echo off\r\n`;
    script += `:: =====================================================================\r\n`;
    script += `:: DustPan Generated Robocopy Backup Script\r\n`;
    script += `:: Created: ${new Date().toLocaleString()}\r\n`;
    script += `:: Target Drive: E:\\ExternalBackup\\DustPan_Archive_${timestamp}\r\n`;
    script += `:: Flag: /Z (Restartable mode resilient to USB/drive disconnects)\r\n`;
    script += `:: =====================================================================\r\n\r\n`;
    script += `set DEST_DIR="E:\\ExternalBackup\\DustPan_Archive_${timestamp}"\r\n`;
    script += `if not exist %DEST_DIR% mkdir %DEST_DIR%\r\n\r\n`;

    backupCandidates.forEach(f => {
      const parentDir = f.path.substring(0, f.path.lastIndexOf('\\'));
      script += `echo [Archiving] ${f.name} (${f.size})\r\n`;
      script += `robocopy "${parentDir}" %DEST_DIR% "${f.name}" /Z /R:1 /W:2 /NP /MT:4\r\n\r\n`;
    });

    script += `echo =====================================================\r\n`;
    script += `echo Backup completed successfully. Inspect logs above.\r\n`;
    script += `pause\r\n`;

    outputTitle.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      Generated: DustPan_Backup_${timestamp}.bat (Ready to run or inspect)
    `;
    outputCode.textContent = script;
    outputCard.classList.add('open');
    outputCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Stage to Review Folder (Manifest.json preview)
  btnStage.addEventListener('click', () => {
    const profile = simulationData[currentProfileKey];
    const deleteCandidates = profile.files.filter(f => f.actionType === 'delete');

    const manifestObj = {
      version: "1.0.0",
      createdAt: new Date().toISOString(),
      bucket: "DustPan_Review/To_Delete",
      totalCandidates: deleteCandidates.length,
      manifestRollbackStatus: "ReadyForAtomicRestore",
      files: deleteCandidates.map(f => ({
        originalPath: f.path,
        fileName: f.name,
        sizeBytes: f.bytes,
        category: f.category,
        sha256Header: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        stagedTimestamp: new Date().toISOString()
      }))
    };

    outputTitle.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      Isolated Staging Reversal Manifest: DustPan_Review/To_Delete/manifest.json
    `;
    outputCode.textContent = JSON.stringify(manifestObj, null, 2);
    outputCard.classList.add('open');
    outputCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Export CSV
  btnCsv.addEventListener('click', () => {
    const profile = simulationData[currentProfileKey];
    let csv = `Filename,OriginalPath,Category,SizeFormatted,SizeBytes,AgeBracket,SuggestedAction,SystemStatus\r\n`;

    profile.files.forEach(f => {
      csv += `"${f.name}","${f.path}","${f.category}","${f.size}",${f.bytes},"${f.age}","${f.action}","${f.status}"\r\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DustPan_Audit_Manifest_${currentProfileKey}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Copy Output button
  btnCopyOutput.addEventListener('click', () => {
    const text = outputCode.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btnCopyOutput.innerHTML;
      btnCopyOutput.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Copied!
      `;
      setTimeout(() => { btnCopyOutput.innerHTML = orig; }, 2000);
    });
  });

  // ==========================================================================
  // 6. Architecture Code Viewer Tabs
  // ==========================================================================

  const archCodeSnippets = {
    cloud: `// Win32 Cloud-Hydration Detection
package scanner

import (
    "golang.org/x/sys/windows"
    "syscall"
)

// Query kernel32.dll for dehydrated cloud reparse attributes
const (
    FILE_ATTRIBUTE_OFFLINE               = 0x00001000
    FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS = 0x00400000
)

func IsCloudOnlyFile(path string) bool {
    ptr, err := syscall.UTF16PtrFromString(path)
    if err != nil { return false }

    attrs, err := windows.GetFileAttributes(ptr)
    if err != nil { return false }

    // Skip if file is online-only (prevents multi-GB downloads)
    return (attrs&FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS) != 0 ||
           (attrs&FILE_ATTRIBUTE_OFFLINE) != 0
}`,

    robocopy: `@echo off
:: Standalone Inspectable Robocopy Script Generated by DustPan
:: Native Windows 10/11 Restartable Stream (/Z)
set TARGET="E:\\DustPan_Backups\\Archive_2026-10"
if not exist %TARGET% mkdir %TARGET%

echo [DustPan] Transferring selected archive candidates...
robocopy "C:\\Users\\user\\Downloads" %TARGET% "render_master.mp4" /Z /R:1 /W:2 /NP
robocopy "C:\\Users\\user\\Documents" %TARGET% "dataset_2023.tar.gz" /Z /R:1 /W:2 /NP

echo Transfer complete. Original files untouched on source drive.
pause`,

    manifest: `{
  "version": "1.0.0",
  "stagingBucket": "DustPan_Review/To_Delete",
  "generatedAt": "2026-10-08T20:20:00Z",
  "items": [
    {
      "originalPath": "C:\\\\Users\\\\user\\\\Downloads\\\\old_installer.iso",
      "stagedPath": "DustPan_Review\\\\To_Delete\\\\old_installer_1728418800.iso",
      "size": 5849201940,
      "sha256": "4a5b6c7d8e9f...",
      "restorable": true
    }
  ]
}`
  };

  const codeTabBtns = document.querySelectorAll('.code-tab-btn');
  const archCodeBody = document.getElementById('archCodeBody');
  const btnCopyArchCode = document.getElementById('btnCopyArchCode');

  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const snippetKey = btn.getAttribute('data-code');
      archCodeBody.textContent = archCodeSnippets[snippetKey] || '';
    });
  });

  btnCopyArchCode.addEventListener('click', () => {
    navigator.clipboard.writeText(archCodeBody.textContent).then(() => {
      const orig = btnCopyArchCode.innerHTML;
      btnCopyArchCode.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Copied!
      `;
      setTimeout(() => { btnCopyArchCode.innerHTML = orig; }, 2000);
    });
  });

  // ==========================================================================
  // 7. FAQ Accordion
  // ==========================================================================

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 8. Sticky Header Scroll Effect & Mobile Nav
  // ==========================================================================

  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(6, 9, 17, 0.98)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid var(--border-glass)';
      }
    });
  }

});
