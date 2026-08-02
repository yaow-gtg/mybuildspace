export interface Project {
  title: string
  description: string
  url: string
  tags: string[]
  images: string[]
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'Portofolio',
    description:
      'Personal portfolio website showcasing projects, skills, and experience. Built with Next.js and Tailwind CSS featuring a cosmic dark theme.',
    url: 'https://mybuildspace.vercel.app',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    images: ['/images/porto.png'],
    gradient: 'from-accent/20 to-accent-light/20',
  },
  {
    title: 'Company Profile',
    description:
      'Professional website for an auto repair shop specializing in 4WD vehicles while also serving regular cars. Features service showcases, workshop information, and contact integration.',
    url: 'https://4wdspeedcenter.vercel.app/',
    images: ['/images/4wdspeedcenter.png'],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    gradient: 'from-accent/20 to-accent-dark/20',
  },
  {
    title: 'Laptop Inventory & Sales Management System',
    description:
      'Laptop Inventory & Sales Management System is a full-stack web application for managing laptop stock, product catalogs, and sales transactions with real-time inventory tracking. It features a public catalog with search and filtering, an admin dashboard for CRUD operations, automated stock deduction on sales, and Excel-based sales report exports.',
    url: '',
    tags: ['Laravel', 'React', 'Tailwind CSS', 'PHP', 'MySQL'],
    images: [
      '/images/pembelian.png',
      '/images/monitoring.png',
      '/images/kelola.png',
      '/images/merek.png',
      '/images/penjualan.png',
    ],
    gradient: 'from-accent/20 to-accent-dark/20',
  },
  {
    title: 'Extracurricular Attendance & Grading System',
    description:
      'Extracurricular Attendance & Grading System is a full-stack web application for managing extracurricular student attendance and automatic grade generation. It features role-based access for coaches and coordinators, per coach data isolation for students and attendance records, duplicate date protection on daily attendance, and automatic A–E grading based on attendance count. It also includes Excel-based exports for monthly attendance recaps (Tuesday/Saturday/Sunday schedule format), grade reports, and full reports.',
    url: 'https://ekskulkaratepadi.tech',
    tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
    images: [
      '/images/landingpage.png',
      '/images/loginpage.png',
      '/images/dashboardadmin.png',
      '/images/editdatapelatih.png',
      '/images/dashboardpelatih.png',
      '/images/daftarsiswa.png',
      '/images/tambahsiswa.png',
      '/images/editdatasiswa.png',
      '/images/riwayatabsensi.png',
      '/images/tambahabsensi.png',
      '/images/detailabsensi.png',
      '/images/editabsensi.png',
      '/images/laporanabsensi.png',
      '/images/tampilannilai.png',
      '/images/laporannilai.png',
    ],
    gradient: 'from-accent-light/20 to-accent-dark/20',
  },
]
