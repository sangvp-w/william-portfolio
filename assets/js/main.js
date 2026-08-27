/* ==========================================================
   CONTENT DATA (VI / EN)
========================================================== */
// Translated static interface labels, keyed by language and element data attribute.
const UI = {
  vi: {
    "nav.about":"Giới thiệu","nav.experience":"Kinh nghiệm","nav.projects":"Dự án","nav.freelance":"Freelance",
    "nav.skills":"Kỹ năng","nav.certs":"Chứng chỉ","nav.contact":"Liên hệ",
    "hero.statusTitle":"TRẠNG THÁI HỆ THỐNG","hero.statExp":"Kinh nghiệm","hero.years":"năm",
    "hero.statCert":"Chứng chỉ","hero.active":"đang hiệu lực","hero.statClients":"Trọng tâm","hero.statSupport":"Cấp hỗ trợ",
    "hero.scroll":"cuộn xuống",
    "about.title":"Về tôi",
    "exp.title":"Kinh nghiệm làm việc",
    "proj.title":"Dự án tiêu biểu",
    "skills.title":"Kỹ năng & Công nghệ",
    "certs.title":"Chứng chỉ",
    "edu.title":"Học vấn & Hành trình",
    "edu.eduHead":"Học vấn","edu.langHead":"Ngoại ngữ","edu.awardsHead":"Giải thưởng",
    "edu.degree":"Cử nhân Công nghệ Thông tin — Kỹ thuật Phần mềm",
    "edu.langNote":"(Nghe & Đọc)","edu.referencesHead":"Bài viết tiêu biểu từ SIU",
    "freelance.title":"Dịch vụ thiết kế website tự do","freelance.projectsTitle":"Các website đã triển khai",
    "contact.title":"Liên hệ với tôi",
    "contact.sub":"Nếu anh/chị cần trao đổi về Oracle, hạ tầng hệ thống, tư vấn kỹ thuật hoặc website theo yêu cầu, tôi luôn sẵn sàng kết nối.",
    "contact.email":"Email","contact.phone":"Phone / Zalo / Viber / WhatsApp","contact.location":"Địa chỉ",
    "contact.locationValue":"Quận 5, TP. Hồ Chí Minh","contact.formTitle":"Gửi lời nhắn","contact.formNote":"Ứng dụng email của bạn sẽ mở sẵn, với nội dung được gửi đến SangVP.work@gmail.com.","contact.name":"Họ và tên","contact.reply":"Email liên hệ","contact.message":"Bạn muốn trao đổi điều gì?","contact.send":"Mở email để gửi",
    "footer.built":"Thiết kế và phát triển bởi <a href=\"https://www.facebook.com/phsangg.20s\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Vo Phuoc Sang</strong></a>",
    "footer.status":"hệ thống đang hoạt động ổn định"
  },
  en: {
    "nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.freelance":"Freelance",
    "nav.skills":"Skills","nav.certs":"Certifications","nav.contact":"Contact",
    "hero.statusTitle":"SYSTEM STATUS","hero.statExp":"Experience","hero.years":"yrs",
    "hero.statCert":"Certifications","hero.active":"active","hero.statClients":"Focus","hero.statSupport":"Support tier",
    "hero.scroll":"scroll",
    "about.title":"Professional Summary",
    "exp.title":"Work Experience",
    "proj.title":"Key Projects",
    "skills.title":"Skills &amp; Technologies",
    "certs.title":"Certifications",
    "edu.title":"Education &amp; Background",
    "edu.eduHead":"Education","edu.langHead":"Language","edu.awardsHead":"Honors &amp; Awards",
    "edu.degree":"Bachelor of Computer Science — Software Engineering",
    "edu.langNote":"(Listening &amp; Reading)","edu.referencesHead":"Selected SIU references",
    "freelance.title":"Freelance Website Design Services","freelance.projectsTitle":"Website Projects Delivered",
    "contact.title":"Contact me",
    "contact.sub":"For Oracle, system infrastructure, technical consulting, or a tailored website, please get in touch.",
    "contact.email":"Email","contact.phone":"Phone / Zalo / Viber / WhatsApp","contact.location":"Location",
    "contact.locationValue":"District 5, Ho Chi Minh City","contact.formTitle":"Send a message","contact.formNote":"Your email app will open with the details addressed to SangVP.work@gmail.com.","contact.name":"Your name","contact.reply":"Your email","contact.message":"How can I help?","contact.send":"Open email to send",
    "footer.built":"Designed &amp; built by <a href=\"https://www.facebook.com/phsangg.20s\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Vo Phuoc Sang</strong></a>",
    "footer.status":"all systems operational"
  }
};

// Language-specific content used to build the dynamic portfolio sections.
const CONTENT = {
  vi:{
    name:"Võ Phước Sang (William)",
    nameHtml:'Võ Phước Sang <span class="t-alias">aka</span> <span class="t-william">William</span>',
    title:"Kỹ sư Hệ thống & Oracle Cloud",
    location:"Quận 5, TP. Hồ Chí Minh",
    boot:[
      {type:"line", html:'<span class="t-prompt">sangvp@portfolio</span><span class="t-key">:~$</span> <span class="t-cmd">whoami</span>'},
      {type:"name"},
      {type:"line", html:'<span class="t-title">Kỹ sư Hệ thống &amp; Oracle Cloud</span>'},
      {type:"line", html:'<span class="t-comment">Quận 5, TP. Hồ Chí Minh</span>'},
      {type:"gap"},
      {type:"line", fullWidth:true, fullWidthStart:true, html:'<span class="t-prompt">sangvp@portfolio</span><span class="t-key">:~$</span> <span class="t-cmd">systemctl status career.service</span>'},
      {type:"line", fullWidth:true, html:'<span class="t-comment">● career.service — active (running) từ 03/2023, hơn 3 năm kinh nghiệm</span>'},
      {type:"line", fullWidth:true, html:'<span class="t-comment">  Chuyên môn: hệ sinh thái Oracle — Hệ thống · Cloud · Dịch vụ · Sản phẩm · Hạ tầng doanh nghiệp</span>'},
    ],
    about:[
      "Kỹ sư Hệ thống & Cloud với hơn 3 năm kinh nghiệm triển khai và vận hành hạ tầng CNTT cho doanh nghiệp, từ hệ thống tại chỗ đến Oracle Cloud Infrastructure (OCI).",
      "Có nền tảng vững về máy chủ, lưu trữ, ảo hóa, hệ điều hành, sao lưu và giám sát; đồng thời trực tiếp làm việc với các môi trường Dev, UAT và Production trên cloud.",
      "Định hướng phát triển chuyên sâu về Cloud và DevOps, lấy hệ sinh thái Oracle làm trọng tâm và sẵn sàng đồng hành cùng nhu cầu chuyển đổi số của doanh nghiệp.",
      "Song song với công việc hạ tầng, tôi nhận thiết kế và phát triển website theo yêu cầu — từ landing page, website doanh nghiệp đến trang thương mại điện tử và hệ thống có quy trình riêng. Mỗi dự án được tư vấn theo mục tiêu kinh doanh, ưu tiên trải nghiệm responsive, tốc độ tải, SEO on-page và hiệu quả chuyển đổi."
    ],
    experience:[
      {
        role:"Kỹ sư Hệ thống / Cloud", org:"CTY TNHH MTV VIỄN THÔNG QUỐC TẾ FPT", orgUrl:"https://fti.fpt.vn/",
        start:"03/2026", end:"Hiện tại",
        bullets:[
          "Cung cấp hỗ trợ kỹ thuật L2 và phối hợp xử lý các yêu cầu L3 cho môi trường Dev, UAT và Production.",
          "Xử lý sự cố, phân tích nguyên nhân gốc rễ và làm việc với Oracle Support thông qua Service Request (SR).",
          "Soạn tài liệu vận hành, báo cáo kỹ thuật và đề xuất phương án bảo trì phù hợp cho khách hàng.",
          "Tham gia presales kỹ thuật cho giải pháp Oracle: làm rõ yêu cầu, xây dựng phương án và hỗ trợ trình bày giải pháp.",
          "Tổ chức các workshop chuyên sâu về dịch vụ OCI cho các đơn vị kỹ thuật nội bộ."
        ]
      },
      {
        role:"Kỹ sư Hệ thống / Cloud", org:"CTY CP CÔNG NGHỆ JPROTECH", orgUrl:"https://jprotech.vn/",
        start:"03/2023", end:"03/2026",
        bullets:[
          "Triển khai và vận hành hạ tầng hybrid, kết hợp hệ thống On-Premises với OCI (Exadata Cloud@Customer, OEM, AVDF, OLVM-KVM).",
          "Cung cấp hỗ trợ L2/L3 cho môi trường Production, tập trung vào xử lý sự cố và phân tích nguyên nhân gốc rễ.",
          "Quản lý Service Request với Oracle Support và điều phối các buổi trao đổi kỹ thuật để tháo gỡ điểm nghẽn hạ tầng.",
          "Duy trì độ ổn định của hệ thống bằng health check định kỳ, giám sát liên tục và bảo trì phòng ngừa.",
          "Soạn tài liệu kỹ thuật, gồm hướng dẫn vận hành, báo cáo bảo trì và khuyến nghị dành cho khách hàng."
        ]
      },
      {
        role:"Front-End Developer Intern", org:"CTY TNHH R2S", orgUrl:"https://r2s.vn/",
        start:"02/2022", end:"05/2022",
        bullets:["Tham gia xây dựng và phát triển nền tảng thực tập.","Nghiên cứu và thực hành các kỹ thuật phát triển Front-End nâng cao.","Thiết kế giao diện website với ReactJS.","Công nghệ: HTML, CSS, JavaScript, Bootstrap, ReactJS, GitHub."]
      },
      {
        role:"Full-Stack Developer Intern", org:"CTY TNHH R2S", orgUrl:"https://r2s.vn/",
        start:"10/2021", end:"01/2022",
        bullets:["Tham gia xây dựng và phát triển nền tảng thực tập.","Nghiên cứu, đánh giá và lựa chọn công nghệ phù hợp.","Thiết kế kiến trúc nghiệp vụ và cơ sở dữ liệu.","Công nghệ: SQL, .NET, Entity Framework, jQuery, GitHub."]
      }
    ],
    projects:[
      {tag:"ORACLE CLOUD", role:"Triển khai, vận hành & presales kỹ thuật", name:"Oracle Cloud Infrastructure (OCI)", bullets:["Triển khai và vận hành workload Dev, UAT, Production trên OCI: Compute, IAM, Networking, Storage, Monitoring và Network Firewall.","Hỗ trợ chuyển đổi workload ứng dụng và cơ sở dữ liệu từ On-Premises lên OCI; đồng thời theo dõi chi phí và báo cáo sử dụng.","Tư vấn giải pháp, xây dựng phương án kỹ thuật và phối hợp với Oracle Support để xử lý các vấn đề phức tạp."]},
      {tag:"ORACLE DATABASE", role:"Nền tảng cơ sở dữ liệu doanh nghiệp", name:"Exadata & Oracle Database Services", bullets:["Triển khai, vận hành và health check Exadata Cloud@Customer; hỗ trợ cấp phát VM Cluster, ECPU, bộ nhớ và lưu trữ.","Làm việc với Oracle AI Autonomous Database, AI Cloud Database Services và Oracle AI Database@AWS.","Phân tích tình trạng tăng dung lượng backup, rà soát chính sách lưu giữ và phối hợp xử lý cùng chuyên gia Oracle."]},
      {tag:"SECURITY & OBSERVABILITY", role:"Bảo mật, giám sát & vận hành", name:"Oracle Enterprise Platforms", bullets:["Triển khai OEM cho Host, Oracle Database và ASM; thiết lập policy cảnh báo và email notification.","Triển khai OCI Data Safe, Audit Vault & Database Firewall (AVDF) và Oracle Secure Backup.","Thực hiện giám sát, health check, bảo trì phòng ngừa, xử lý sự cố và báo cáo kỹ thuật."]},
      {tag:"SYSTEMS", role:"Hạ tầng, ảo hóa & lưu trữ", name:"Enterprise Infrastructure Delivery", bullets:["Thực hiện POC và triển khai Oracle Linux Virtualization Manager (OLVM-KVM), VMware vSphere / ESXi và KVM.","Triển khai máy chủ enterprise, IBM Storage SAN và Pure Storage FlashArray.","Xây dựng tài liệu vận hành, quy trình kỹ thuật và khuyến nghị cải tiến hạ tầng."]},
    ],
    freelance:[
      {tag:"FREELANCE", role:"Từ ý tưởng đến sản phẩm hoàn chỉnh", name:"Thiết kế website theo yêu cầu", bullets:["Thiết kế và phát triển website theo đúng mục tiêu sử dụng — từ landing page, website doanh nghiệp đến hệ thống có quy trình riêng.","Tư vấn rõ ràng về phạm vi, trải nghiệm người dùng, tính năng và phương án triển khai trước khi bắt đầu.","Tối ưu SEO on-page, hiệu năng, cấu trúc nội dung và khả năng hiển thị trên công cụ tìm kiếm." ]},
      {tag:"E-COMMERCE", role:"Website bán kính áp tròng màu", name:"Ponpish", bullets:["Nền tảng thương mại điện tử Nhật Bản dành cho kính áp tròng màu, hỗ trợ đăng nhập, bảng xếp hạng sản phẩm và lịch sử xem.","Sắp xếp danh mục theo thương hiệu, dòng 1day / 1month, sản phẩm bán chạy, mức giá và chương trình khuyến mãi.","Tối ưu hành trình mua sắm và giới thiệu gói giao định kỳ cho dòng lens trong suốt."], link:"https://ponpish.jp/"},
      {tag:"E-COMMERCE", role:"Website thương mại điện tử thức ăn thú cưng cao cấp", name:"Dhuman", bullets:["Trang bán hàng chính thức tại Hàn Quốc cho thương hiệu thức ăn thú cưng cao cấp, tập trung vào dòng thức ăn tươi cho chó.","Tích hợp danh mục sản phẩm, flash sale, giỏ hàng, ưu đãi thành viên và nội dung dinh dưỡng cho khớp, da và mắt.","Tối ưu cách trình bày khuyến mãi, gói sản phẩm và hành trình chuyển đổi của khách hàng mua sắm trực tuyến."], link:"https://www.dhuman.co.kr/"},
      {tag:"CORPORATE SERVICE", role:"Website dịch vụ - thiết kế slide", name:"FlashSlide", bullets:["Website giới thiệu dịch vụ thiết kế PowerPoint chuyên nghiệp cho doanh nghiệp.","Trình bày rõ các nhóm dịch vụ, dự án, mẫu thiết kế và lời kêu gọi bắt đầu dự án.","Tập trung chuyển đổi các ý tưởng phức tạp thành bài thuyết trình trực quan, nhất quán thương hiệu."], link:"https://flashslide.com/"},
      {tag:"CORPORATE", role:"Website doanh nghiệp - creative technology", name:"Waves Group", bullets:["Website doanh nghiệp cho hệ sinh thái sáng tạo nội dung ứng dụng công nghệ.","Giới thiệu năng lực sản xuất và phân phối content đa nền tảng, đa quốc gia; chuẩn hóa và tự động hóa quy trình.","Cấu trúc nội dung tập trung vào công nghệ, hệ sinh thái nội dung, quản trị vận hành và cơ hội hợp tác."], link:"https://wavesgroup.com.vn/"},
      {tag:"PROFESSIONAL SERVICE", role:"Website dịch vụ pháp lý", name:"Thanh Sen Group", bullets:["Website giới thiệu hệ sinh thái dịch vụ pháp lý: luật sư, thẩm định giá, thừa phát lại, trọng tài thương mại và đấu giá tài sản.","Thiết kế luồng liên hệ/tư vấn rõ ràng, gồm liên hệ trực tiếp và tư vấn qua Zalo.","Tổ chức nội dung theo từng nhóm dịch vụ để cá nhân, doanh nghiệp và nhà đầu tư dễ tiếp cận."], link:"https://www.thanhsengroup.com.vn/"},
      {tag:"RESPONSIVE & SEO", role:"Trải nghiệm và tăng trưởng", name:"Tối ưu trải nghiệm số", bullets:["Thiết kế ưu tiên điện thoại, máy tính bảng và máy tính để bàn; đảm bảo bố cục responsive, tốc độ và các luồng liên hệ.","Hỗ trợ SEO kỹ thuật cơ bản: metadata, heading, sitemap, robots, tối ưu ảnh và hiệu năng tải trang."]},
      {tag:"PARTNERSHIP", role:"Đồng hành sau bàn giao", name:"Tư vấn & hỗ trợ kỹ thuật", bullets:["Bàn giao rõ ràng, hỗ trợ kỹ thuật sau khi website đi vào hoạt động.","Phù hợp với cá nhân, thương hiệu nhỏ và doanh nghiệp cần một website chỉn chu theo đúng nhu cầu."]}
    ],
    skillGroups:[
      {icon:"cloud", name:"Oracle Cloud Infrastructure (OCI)", tags:["Compute","Networking","IAM","Block / Object Storage","Monitoring","Observability","Network Firewall","Data Safe"]},
      {icon:"db", name:"Giải pháp Oracle Enterprise", tags:["Exadata Cloud@Customer (ExaCC)","Oracle Enterprise Manager (OEM)","Audit Vault & Database Firewall (AVDF)","Oracle Linux Virtualization Manager (OLVM-KVM)"]},
      {icon:"layers", name:"Virtualization", tags:["Oracle Linux Virtualization Manager (OLVM)","VMware vSphere / ESXi","KVM"]},
      {icon:"terminal", name:"Hệ điều hành", tags:["Oracle Linux","Red Hat Enterprise Linux (RHEL)","Windows Server"]},
      {icon:"server", name:"Lưu trữ & Phần cứng", tags:["IBM Storage","Pure Storage FlashArray","HPE ProLiant Servers","Oracle Hardware"]},
      {icon:"shield", name:"Vận hành & Hỗ trợ", tags:["Hỗ trợ hạ tầng cấp L2","Giám sát & Health Check","Xử lý sự cố & phân tích log","Bảo trì định kỳ & vá lỗi","Viết tài liệu & báo cáo kỹ thuật"]},
      {icon:"git", name:"Đào tạo & Tư vấn Oracle", tags:["Đào tạo dịch vụ OCI","OCI technical workshop","Oracle solution presales","Phân tích yêu cầu kỹ thuật","Tư vấn kiến trúc & vận hành"]}
    ],
    certs:[
      {name:"Oracle Cloud Infrastructure 2025 Certified Architect Professional", year:"Hiệu lực đến 02/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Cloud Ops Professional", year:"Hiệu lực đến 02/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified DevOps Professional", year:"Hiệu lực đến 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", year:"Hiệu lực đến 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Migration Architect Professional", year:"Hiệu lực đến 07/2027"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional", year:"Hiệu lực đến 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Networking Professional", year:"Hiệu lực đến 08/2027"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Observability Professional", year:"Hiệu lực đến 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Security Professional", year:"Hiệu lực đến 07/2027"},
      {name:"Oracle AI Autonomous Database 2025 Certified Professional", year:"Hiệu lực đến 06/2028"},
      {name:"Oracle AI Cloud Database Services 2025 Certified Professional", year:"Hiệu lực đến 06/2028"},
      {name:"Oracle AI Database Administration Certified Professional", year:"Đạt chứng chỉ 06/2026"},
      {name:"Oracle AI Database@AWS Certified Architect Professional", year:"Đạt chứng chỉ 06/2026"},
      {name:"Oracle Certified Professional: Oracle Linux 8 System Administrator", year:"Đạt chứng chỉ 04/2024"},
      {name:"Oracle Exadata Database Machine X9M Certified Implementation Specialist", year:"Đạt chứng chỉ 06/2026"},
      {name:"MOS 2016: Word", year:"Microsoft Office Specialist"},
      {name:"MOS 2016: PowerPoint", year:"Microsoft Office Specialist"},
      {name:"MOS 2016: Excel", year:"Microsoft Office Specialist"}
    ],
    awards:[
      {t:"Giải Khuyến khích — Nghiên cứu Khoa học Sinh viên (Bộ GD&ĐT)", y:"2020"},
      {t:"Giải Nhất — Cuộc thi Phát triển Frontend trên nền tảng NukeViet", y:"2020"},
      {t:"Giải Khuyến khích — Cuộc thi An toàn Thông tin ASEAN (VNISA)", y:"2019"}
    ],
    references:[
      {t:"Sinh viên SIU tranh tài tại cuộc thi Sinh viên với An toàn thông tin ASEAN 2019", u:"https://siu.edu.vn/sinh-vien-siu-tranh-tai-tai-cuoc-thi-sinh-vien-voi-an-toan-thong-tin-asean-2019/"},
      {t:"Nhiều đề tài sáng tạo, chất lượng tranh tài tại chung kết Nghiên cứu khoa học SIU lần 3", u:"https://siu.edu.vn/nhieu-de-tai-sang-tao-chat-luong-tranh-tai-tai-chung-ket-cuoc-thi-sinh-vien-nghien-cuu-khoa-hoc-siu-lan-3/"},
      {t:"Sôi nổi chương trình gặp mặt sinh viên và tổng kết, phát động nghiên cứu khoa học CNTT", u:"https://siu.edu.vn/soi-noi-chuong-trinh-gap-mat-sinh-vien-va-tong-ket-phat-dong-nghien-cuu-khoa-hoc-cua-khoa-cntt/"},
      {t:"4 đề tài xuất sắc của sinh viên khoa CNTT được trao giải tại chung kết NCKH", u:"https://siu.edu.vn/4-de-tai-xuat-sac-cua-sinh-vien-khoa-cntt-duoc-trao-giai-tai-chung-ket-cuoc-thi-nckh/"},
      {t:"Sinh viên SIU đạt giải Khuyến khích cấp Bộ - Giải thưởng Sinh viên Nghiên cứu khoa học 2020", u:"https://siu.edu.vn/sinh-vien-siu-dat-giai-khuyen-khich-cap-bo-giai-thuong-sinh-vien-nghien-cuu-khoa-hoc-2020/"}
    ]
  },

  en:{
    name:"William Vo Phuoc Sang",
    nameHtml:'Vo Phuoc Sang <span class="t-alias">aka</span> <span class="t-william">William</span>',
    title:"Oracle Cloud, Systems & Services Engineer",
    location:"District 5, Ho Chi Minh City",
    boot:[
      {type:"line", html:'<span class="t-prompt">sangvp@portfolio</span><span class="t-key">:~$</span> <span class="t-cmd">whoami</span>'},
      {type:"name"},
      {type:"line", html:'<span class="t-title">Oracle Cloud, Systems &amp; Services Engineer</span>'},
      {type:"line", html:'<span class="t-comment">District 5, Ho Chi Minh City</span>'},
      {type:"gap"},
      {type:"line", fullWidth:true, fullWidthStart:true, html:'<span class="t-prompt">sangvp@portfolio</span><span class="t-key">:~$</span> <span class="t-cmd">systemctl status career.service</span>'},
      {type:"line", fullWidth:true, html:'<span class="t-comment">● career.service — active (running) since 03/2023, 3+ years uptime</span>'},
      {type:"line", fullWidth:true, html:'<span class="t-comment">  Core specialization: Oracle ecosystem — Systems · Cloud · Services · Products · Enterprise Infrastructure</span>'},
    ],
    about:[
      "System & Cloud Engineer with more than 3 years of experience deploying and operating IT infrastructure in enterprise environments, spanning on-premises systems and Oracle Cloud Infrastructure (OCI).",
      "Strong foundation in system infrastructure - servers, storage, virtualization, operating systems, backup, and monitoring - with hands-on experience across Dev/UAT/Prod cloud environments.",
      "Focused on growing deeper in Cloud and DevOps, with the Oracle ecosystem at the core and readiness to support broader enterprise transformation needs.",
      "Alongside infrastructure work, I provide freelance website design and development - from landing pages and company profiles to e-commerce sites and systems with custom workflows. Each project is shaped around practical goals, with responsive design, load speed, on-page SEO, and customer conversion in mind."
    ],
    experience:[
      {
        role:"System / Cloud Engineer", org:"FPT INTERNATIONAL TELECOM COMPANY LIMITED", orgUrl:"https://fti.fpt.vn/",
        start:"03/2026", end:"Present",
        bullets:[
          "Provide L2 technical support and contribute to L3 support for Dev/UAT/Prod environments.",
          "Troubleshoot issues, perform root cause analysis, and collaborate with Oracle Support via Service Requests (SR).",
          "Draft operational documentation, technical reports, and maintenance recommendations.",
          "Provide technical presales for Oracle solutions: clarify requirements, shape solution options, and support solution presentations.",
          "Deliver OCI service training through in-depth workshops for internal technical centers."
        ]
      },
      {
        role:"System / Cloud Engineer", org:"JPROTECH TECHNOLOGY JOINT STOCK COMPANY", orgUrl:"https://jprotech.vn/",
        start:"03/2023", end:"03/2026",
        bullets:[
          "Deployed & managed hybrid infrastructure across On-Premises and OCI (Exadata Cloud@Customer, OEM, AVDF, OLVM-KVM).",
          "Provided L2/L3 support for production environments, focused on incident handling and root cause analysis.",
          "Managed SR escalations with Oracle Support and led technical meetings to resolve infrastructure bottlenecks.",
          "Maintained systems through periodic health checks, monitoring, and preventive maintenance.",
          "Authored technical documentation — operational guides, maintenance reports, customer recommendations."
        ]
      },
      {
        role:"Front-End Developer Intern", org:"R2S COMPANY LIMITED", orgUrl:"https://r2s.vn/",
        start:"02/2022", end:"05/2022",
        bullets:["Built and developed an internship platform.","Learned and practiced advanced front-end development.","Designed websites using ReactJS.","Skills: HTML, CSS, JavaScript, Bootstrap, ReactJS, GitHub."]
      },
      {
        role:"Full-Stack Developer Intern", org:"R2S COMPANY LIMITED", orgUrl:"https://r2s.vn/",
        start:"10/2021", end:"01/2022",
        bullets:["Built and developed an internship platform.","Researched efficient and suitable technology options.","Designed business architecture and databases.","Skills: SQL, .NET, Entity Framework, jQuery, GitHub."]
      }
    ],
    projects:[
      {tag:"ORACLE CLOUD", role:"Implementation, operations & technical presales", name:"Oracle Cloud Infrastructure (OCI)", bullets:["Deploy and operate OCI Dev/UAT/Prod workloads across Compute, IAM, Networking, Storage, Monitoring, and Network Firewall.","Support application and database workload migration from on-premises to OCI, including cost monitoring and usage reporting.","Advise on solution options, develop technical approaches, and collaborate with Oracle Support on complex issues."]},
      {tag:"ORACLE DATABASE", role:"Enterprise database platforms", name:"Exadata & Oracle Database Services", bullets:["Deploy, operate, and health-check Exadata Cloud@Customer; support VM cluster provisioning and ECPU, memory, and storage allocation.","Work with Oracle AI Autonomous Database, AI Cloud Database Services, and Oracle AI Database@AWS.","Analyze backup storage growth, review retention policies, and coordinate resolution with Oracle specialists."]},
      {tag:"SECURITY & OBSERVABILITY", role:"Security, monitoring & operations", name:"Oracle Enterprise Platforms", bullets:["Deploy OEM for Hosts, Oracle Databases, and ASM; configure alerting policies and email notifications.","Deploy OCI Data Safe, Audit Vault & Database Firewall (AVDF), and Oracle Secure Backup.","Perform monitoring, health checks, preventive maintenance, incident troubleshooting, and technical reporting."]},
      {tag:"SYSTEMS", role:"Infrastructure, virtualization & storage", name:"Enterprise Infrastructure Delivery", bullets:["Deliver POCs and deployments for Oracle Linux Virtualization Manager (OLVM-KVM), VMware vSphere / ESXi, and KVM.","Deploy enterprise servers, IBM Storage SAN, and Pure Storage FlashArray.","Create operational documentation, technical procedures, and infrastructure improvement recommendations."]},
    ],
    freelance:[
      {tag:"FREELANCE", role:"From idea to product", name:"Tailored Website Design", bullets:["Design and build websites around specific goals - from landing pages and company profiles to systems with custom workflows.","Provide a clear consultation on scope, user experience, features, and delivery before work begins.","Optimize on-page SEO, performance, content structure, and search visibility."]},
      {tag:"E-COMMERCE", role:"E-commerce - colored contact lenses", name:"Ponpish", bullets:["Japanese e-commerce platform for colored contact lenses, with login, rankings, and browsing history.","Organizes products by brand, 1day / 1month type, best sellers, pricing, and promotions.","Supports shopping flows and promotes a recurring delivery plan for clear lenses."], link:"https://ponpish.jp/"},
      {tag:"E-COMMERCE", role:"E-commerce - premium pet food", name:"Dhuman", bullets:["Korean official mall for a premium pet food brand, focused on fresh dog food.","Includes product catalog, flash sales, cart, membership benefits, and nutrition care for joints, skin, and eyes.","Presents promotions, product bundles, and conversion flows for online shoppers."], link:"https://www.dhuman.co.kr/"},
      {tag:"CORPORATE SERVICE", role:"Service website - presentation design", name:"FlashSlide", bullets:["Website presenting professional PowerPoint design services for businesses.","Clearly structures services, projects, design templates, and a project-start call to action.","Focuses on translating complex ideas into visual, compelling, and brand-consistent presentations."], link:"https://flashslide.com/"},
      {tag:"CORPORATE", role:"Corporate - creative technology", name:"Waves Group", bullets:["Corporate website for a technology-driven content-creation ecosystem.","Presents multi-platform, multi-market content production and distribution, with standardized, automated processes.","Content is organized around technology, content ecosystem, operational management, and partnership opportunities."], link:"https://wavesgroup.com.vn/"},
      {tag:"PROFESSIONAL SERVICE", role:"Legal services website", name:"Thanh Sen Group", bullets:["Website presenting an integrated legal-services ecosystem: lawyers, valuation, bailiff services, commercial arbitration, and property auctions.","Provides clear inquiry and consultation paths, including direct contact and Zalo consultation.","Organizes content by service area for individuals, businesses, and investors."], link:"https://www.thanhsengroup.com.vn/"},
      {tag:"RESPONSIVE & SEO", role:"Experience and growth", name:"Digital Experience Optimization", bullets:["Design for phones, tablets, and desktops, with responsive layout, load speed, and contact flows in mind.","Provide foundational technical SEO: metadata, headings, sitemap, robots, image optimization, and performance."]},
      {tag:"PARTNERSHIP", role:"Support after handover", name:"Technical Consultation & Support", bullets:["Provide a clear handover and technical support after the website goes live.","A good fit for individuals, growing brands, and businesses that need a polished, purpose-built website."]}
    ],
    skillGroups:[
      {icon:"cloud", name:"Oracle Cloud Infrastructure (OCI)", tags:["Compute","Networking","IAM","Block / Object Storage","Monitoring","Observability","Network Firewall","Data Safe"]},
      {icon:"db", name:"Oracle Enterprise Technologies", tags:["Exadata Cloud@Customer (ExaCC)","Oracle Enterprise Manager (OEM)","Audit Vault & Database Firewall (AVDF)","Oracle Linux Virtualization Manager (OLVM-KVM)"]},
      {icon:"layers", name:"Virtualization", tags:["Oracle Linux Virtualization Manager (OLVM)","VMware vSphere / ESXi","KVM"]},
      {icon:"terminal", name:"Operating Systems", tags:["Oracle Linux","Red Hat Enterprise Linux (RHEL)","Windows Server"]},
      {icon:"server", name:"Storage & Hardware", tags:["IBM Storage","Pure Storage FlashArray","HPE ProLiant Servers","Oracle Hardware"]},
      {icon:"shield", name:"Operations & Support", tags:["L2 Infrastructure Support","Monitoring & Health Checks","Incident Troubleshooting & Log Analysis","Preventive Maintenance & Patching","Technical Documentation & Reporting"]},
      {icon:"git", name:"Oracle Training & Consulting", tags:["OCI service training","OCI technical workshops","Oracle solution presales","Technical requirements analysis","Architecture & operations consulting"]}
    ],
    certs:[
      {name:"Oracle Cloud Infrastructure 2025 Certified Architect Professional", year:"Valid through 02/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Cloud Ops Professional", year:"Valid through 02/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified DevOps Professional", year:"Valid through 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", year:"Valid through 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Migration Architect Professional", year:"Valid through 07/2027"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional", year:"Valid through 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Networking Professional", year:"Valid through 08/2027"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Observability Professional", year:"Valid through 06/2028"},
      {name:"Oracle Cloud Infrastructure 2025 Certified Security Professional", year:"Valid through 07/2027"},
      {name:"Oracle AI Autonomous Database 2025 Certified Professional", year:"Valid through 06/2028"},
      {name:"Oracle AI Cloud Database Services 2025 Certified Professional", year:"Valid through 06/2028"},
      {name:"Oracle AI Database Administration Certified Professional", year:"Earned 06/2026"},
      {name:"Oracle AI Database@AWS Certified Architect Professional", year:"Earned 06/2026"},
      {name:"Oracle Certified Professional: Oracle Linux 8 System Administrator", year:"Earned 04/2024"},
      {name:"Oracle Exadata Database Machine X9M Certified Implementation Specialist", year:"Earned 06/2026"},
      {name:"MOS 2016: Word", year:"Microsoft Office Specialist"},
      {name:"MOS 2016: PowerPoint", year:"Microsoft Office Specialist"},
      {name:"MOS 2016: Excel", year:"Microsoft Office Specialist"}
    ],
    awards:[
      {t:"Consolation Prize — Student Research Competition (MOET)", y:"2020"},
      {t:"First Prize — Frontend Software Development Contest (NukeViet CMS)", y:"2020"},
      {t:"Consolation Prize — ASEAN Information Security Competition (VNISA)", y:"2019"}
    ],
    references:[
      {t:"SIU students compete in the ASEAN Student Information Security Competition 2019", u:"https://siu.edu.vn/sinh-vien-siu-tranh-tai-tai-cuoc-thi-sinh-vien-voi-an-toan-thong-tin-asean-2019/"},
      {t:"Creative research projects at the SIU student research competition final", u:"https://siu.edu.vn/nhieu-de-tai-sang-tao-chat-luong-tranh-tai-tai-chung-ket-cuoc-thi-sinh-vien-nghien-cuu-khoa-hoc-siu-lan-3/"},
      {t:"SIU IT faculty student research program", u:"https://siu.edu.vn/soi-noi-chuong-trinh-gap-mat-sinh-vien-va-tong-ket-phat-dong-nghien-cuu-khoa-hoc-cua-khoa-cntt/"},
      {t:"Outstanding SIU IT student research projects recognized at the final", u:"https://siu.edu.vn/4-de-tai-xuat-sac-cua-sinh-vien-khoa-cntt-duoc-trao-giai-tai-chung-ket-cuoc-thi-nckh/"},
      {t:"SIU student receives MOET consolation prize for student research, 2020", u:"https://siu.edu.vn/sinh-vien-siu-dat-giai-khuyen-khich-cap-bo-giai-thuong-sinh-vien-nghien-cuu-khoa-hoc-2020/"}
    ]
  }
};

// Reusable inline SVG icons for dynamically generated skill and certification cards.
const ICONS = {
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H8a5 5 0 1 1 1.3-9.8A6 6 0 0 1 20 12a4 4 0 0 1-2.5 7Z"/></svg>',
  db:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  terminal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>',
  server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  git:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.3 7.2 15.7 10.7M8.3 16.8 15.7 13.3"/></svg>',
  cert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="m9 12.5-1.5 7L12 17l4.5 2.5-1.5-7"/></svg>'
};

/* ==========================================================
   STATE
========================================================== */
// Store the currently active language and color theme for this page session.
let currentLang = (navigator.language || "vi").toLowerCase().startsWith("vi") ? "vi" : "vi";
let currentTheme = "dark";

/* ==========================================================
   INIT
========================================================== */
// Restore saved preferences, render content, and attach all interactive behaviors.
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("sang-lang");
  const savedTheme = localStorage.getItem("sang-theme");
  if (savedLang) currentLang = savedLang;
  if (savedTheme) currentTheme = savedTheme;
  else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) currentTheme = "light";

  document.documentElement.setAttribute("data-theme", currentTheme);
  document.documentElement.setAttribute("data-lang", currentLang);
  document.documentElement.setAttribute("lang", currentLang);

  render();
  bootTerminal();
  placeProfilePhoto();
  initReveal();
  initNav();
  initContactForm();
  initCursor();

  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("langToggle").addEventListener("click", toggleLang);
});

/* ==========================================================
   THEME / LANG TOGGLES
========================================================== */
function toggleTheme(){
  // Switch the document theme and remember the visitor's selection.
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("sang-theme", currentTheme);
}

function toggleLang(){
  // Switch the language, then rebuild translated and dynamic content.
  currentLang = currentLang === "vi" ? "en" : "vi";
  document.documentElement.setAttribute("data-lang", currentLang);
  document.documentElement.setAttribute("lang", currentLang);
  localStorage.setItem("sang-lang", currentLang);
  render();
  bootTerminal();
  placeProfilePhoto();
  initReveal();
}

/* ==========================================================
   RENDER STATIC i18n STRINGS
========================================================== */
function applyUI(){
  // Replace labels marked with data-i18n using the active language dictionary.
  const dict = UI[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
}

/* ==========================================================
   RENDER DYNAMIC CONTENT
========================================================== */
function render(){
  // Render every portfolio section whose content is supplied from JavaScript data.
  applyUI();
  const c = CONTENT[currentLang];

  // About
  const aboutList = document.getElementById("aboutList");
  aboutList.innerHTML = c.about.map(t => `<li>${t}</li>`).join("");

  // Experience
  const exp = document.getElementById("expTimeline");
  exp.innerHTML = c.experience.map(e => `
    <div class="log-entry reveal">
      <div class="log-meta">${e.start} <span class="sep">→</span> ${e.end}</div>
      <div class="log-org">${e.orgUrl ? `<a href="${e.orgUrl}" target="_blank" rel="noopener noreferrer">${e.org}</a>` : e.org}</div>
      <div class="log-role">${e.role}</div>
      <ul class="log-bullets">${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    </div>
  `).join("");

  // Projects
  const proj = document.getElementById("projectGrid");
  proj.innerHTML = c.projects.map(p => {
    if (p.wide){
      return `
      <div class="proj-card proj-card-wide reveal">
        <div class="proj-top">
          <div>
            <div class="proj-name">${p.name}</div>
            <div class="proj-role">${p.role}</div>
          </div>
          <span class="proj-tag">${p.tag}</span>
        </div>
        <div class="proj-subgrid">
          ${p.sub.map(s => `<div class="proj-sub-item"><b>${s.b}</b><span>${s.s}</span></div>`).join("")}
        </div>
      </div>`;
    }
    return `
    <div class="proj-card reveal">
      <div class="proj-top">
        <div>
          <div class="proj-name">${p.name}</div>
          <div class="proj-role">${p.role}</div>
        </div>
        <span class="proj-tag">${p.tag}</span>
      </div>
      <ul class="proj-bullets">${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.linkLabel || p.link.replace(/^https?:\/\//, "")} ↗</a>` : ""}
    </div>`;
  }).join("");

  // Freelance services and selected website projects
  const renderFreelanceCard = p => `
    <div class="proj-card reveal">
      <div class="proj-top">
        <div>
          <div class="proj-name">${p.name}</div>
          <div class="proj-role">${p.role}</div>
        </div>
        <span class="proj-tag">${p.tag}</span>
      </div>
      <ul class="proj-bullets">${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.linkLabel || p.link.replace(/^https?:\/\//, "")} ↗</a>` : ""}
    </div>`;
  document.getElementById("freelanceGrid").innerHTML = c.freelance.filter(p => !p.link).map(renderFreelanceCard).join("");
  document.getElementById("freelanceProjectGrid").innerHTML = c.freelance.filter(p => p.link).map(renderFreelanceCard).join("");

  // Skills
  const sk = document.getElementById("skillsGrid");
  sk.innerHTML = c.skillGroups.map(g => `
    <div class="skill-card reveal">
      <div class="skill-head">
        <span class="skill-icon">${ICONS[g.icon] || ""}</span>
        <h3>${g.name}</h3>
      </div>
      <div class="skill-tags">${g.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");

  // Certs
  const cg = document.getElementById("certGrid");
  cg.innerHTML = c.certs.map(ct => `
    <div class="cert-card reveal">
      <span class="cert-badge">${ICONS.cert}</span>
      <div>
        <div class="cert-name">${ct.name}</div>
        <div class="cert-year">${ct.year}</div>
      </div>
    </div>
  `).join("");

  // Awards
  const aw = document.getElementById("awardList");
  aw.innerHTML = c.awards.map(a => `<li><b>${a.t}</b><span class="award-year">${a.y}</span></li>`).join("");

  // Selected university references
  const refs = document.getElementById("referenceList");
  refs.innerHTML = c.references.map(r => `<a href="${r.u}" target="_blank" rel="noopener noreferrer"><span>${r.t}</span><span>SIU ↗</span></a>`).join("");
}

function placeProfilePhoto(){
  // Move the portrait into the terminal after each content render.
  const photo = document.querySelector(".hero-photo-wrap");
  const terminalBody = document.getElementById("terminalBody");
  if (photo && terminalBody && photo.parentElement !== terminalBody){
    terminalBody.appendChild(photo);
    terminalBody.classList.add("has-profile");
  }
}

/* ==========================================================
   TERMINAL BOOT ANIMATION
========================================================== */
let bootTimers = [];
function bootTerminal(){
  // Rebuild the terminal lines and reveal them sequentially unless motion is reduced.
  bootTimers.forEach(clearTimeout);
  bootTimers = [];
  const body = document.getElementById("terminalBody");
  const c = CONTENT[currentLang];
  const photo = body.querySelector(".hero-photo-wrap");
  if (photo) photo.remove();
  body.innerHTML = "";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  c.boot.forEach((item, i) => {
    const el = document.createElement("span");
    el.className = "tl";
    if (item.type === "gap"){
      el.style.display = "block";
      el.style.height = "10px";
      el.classList.add("show");
      body.appendChild(el);
      return;
    }
    if (item.type === "name"){
      el.classList.add("t-name");
      el.innerHTML = (c.nameHtml || c.name) + '<span class="t-caret"></span>';
    } else {
      el.innerHTML = item.html;
    }
    if (item.fullWidth) el.classList.add("full-width");
    if (item.fullWidthStart) el.classList.add("full-width-start");
    body.appendChild(el);

    const delay = reduced ? 0 : i * 260;
    const t = setTimeout(() => el.classList.add("show"), delay);
    bootTimers.push(t);
  });
  if (photo) body.appendChild(photo);
}

/* ==========================================================
   SCROLL REVEAL
========================================================== */
function initReveal(){
  // Reveal section content once it enters the viewport.
  document.querySelectorAll(".section-title, .eyebrow, .contact-sub").forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:"0px 0px -60px 0px"});

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ==========================================================
   MOBILE NAV
========================================================== */
function initNav(){
  // Toggle the mobile menu and close it after a navigation link is selected.
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function initCursor(){
  // Enable the enhanced cursor only for fine pointers when motion is allowed.
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const move = event => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
    dot.classList.add("visible");
    ring.classList.add("visible");
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerleave", () => { dot.classList.remove("visible"); ring.classList.remove("visible"); });
  document.querySelectorAll("a, button, input, textarea, .proj-card, .skill-card, .cert-card, .terminal-body .tl, .about-list li, .log-bullets li, .proj-bullets li").forEach(element => {
    element.addEventListener("pointerenter", () => { dot.classList.add("hover"); ring.classList.add("hover"); });
    element.addEventListener("pointerleave", () => { dot.classList.remove("hover"); ring.classList.remove("hover"); });
  });
}

function initContactForm(){
  // Convert submitted form values into a prefilled mailto link.
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const message = document.getElementById("senderMessage").value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:SangVP.work@gmail.com?subject=${subject}&body=${body}`;
  });
}
