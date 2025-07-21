# Clerk Demo - Next.js 인증 시스템

Clerk를 활용한 완전한 사용자 인증 시스템이 구현된 Next.js 애플리케이션입니다. 
현대적이고 안전한 사용자 인증 기능을 제공하며, 한국어 UI를 지원합니다.

## ✨ 주요 기능

- 🔐 **완전한 사용자 인증 시스템**
  - 이메일/소셜 로그인
  - 회원가입 및 사용자 프로필 관리
  - 세션 관리 및 자동 로그아웃
  
- 🎨 **모던한 UI/UX**
  - 반응형 디자인 (모바일/데스크톱 대응)
  - Tailwind CSS를 활용한 깔끔한 스타일링
  - 한국어 사용자 인터페이스
  
- 🛡️ **보안 강화**
  - Clerk 미들웨어를 통한 라우트 보호
  - 자동 토큰 관리
  - CSRF 및 XSS 보호

- 🚀 **최신 기술 스택**
  - Next.js 15 (App Router)
  - TypeScript
  - React 19
  - Tailwind CSS 4

## 🛠️ 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 15.4.2 | React 프레임워크 |
| React | 19.1.0 | UI 라이브러리 |
| TypeScript | ^5 | 타입 안전성 |
| Clerk | ^6.25.4 | 인증 시스템 |
| Tailwind CSS | ^4 | CSS 프레임워크 |

## 🚀 시작하기

### 1. 프로젝트 클론 및 의존성 설치

```bash
git clone <repository-url>
cd clerk-demo
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 Clerk 키를 설정합니다:

```env
# Clerk Keys (https://clerk.com/dashboard에서 확인)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# 선택사항: 사용자 정의 리다이렉트 URL
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 📁 프로젝트 구조

```
clerk-demo/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃 (ClerkProvider 설정)
│   └── page.tsx             # 메인 페이지 (인증 UI)
├── middleware.ts            # Clerk 인증 미들웨어
├── Clerk.md                 # Clerk 연동 가이드 문서
├── package.json             # 프로젝트 의존성
└── README.md                # 프로젝트 문서
```

## 🔧 Clerk 설정 방법

### 1. Clerk 계정 생성
1. [Clerk Dashboard](https://clerk.com/dashboard)에서 계정 생성
2. 새 애플리케이션 생성
3. API 키 복사

### 2. 인증 제공자 설정
Clerk Dashboard에서 원하는 인증 방법을 활성화:
- 📧 이메일/비밀번호
- 🔗 Google, GitHub, Discord 등 소셜 로그인
- 📱 SMS 인증

### 3. 도메인 설정
- Development: `http://localhost:3000`
- Production: 실제 도메인 URL

## 📱 주요 컴포넌트

### 인증 상태 확인
```tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";

<SignedIn>
  <div>로그인된 사용자에게만 보임</div>
</SignedIn>

<SignedOut>
  <div>비로그인 사용자에게만 보임</div>
</SignedOut>
```

### 사용자 정보 접근
```tsx
import { useUser } from "@clerk/nextjs";

function UserProfile() {
  const { user } = useUser();
  
  return (
    <div>
      <p>이름: {user?.firstName}</p>
      <p>이메일: {user?.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
}
```

## 🎯 사용 방법

### 1. 첫 방문 사용자
- 메인 페이지에서 "회원가입" 버튼 클릭
- 이메일 또는 소셜 계정으로 가입
- 인증 완료 후 환영 메시지 확인

### 2. 기존 사용자
- "로그인" 버튼 클릭
- 등록된 계정으로 로그인
- 개인화된 환영 메시지 및 프로필 정보 확인

### 3. 로그아웃
- 헤더의 사용자 아바타 클릭
- 드롭다운 메뉴에서 "로그아웃" 선택

## 📋 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 🔍 추가 리소스

- 📖 **[Clerk.md](./Clerk.md)** - 상세한 Clerk 연동 가이드
- 📚 **[Clerk 공식 문서](https://clerk.com/docs)** - 고급 설정 및 기능
- 🎓 **[Next.js 문서](https://nextjs.org/docs)** - Next.js 학습 자료

## 🚀 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 환경 변수 설정
배포 플랫폼에서 다음 환경 변수들을 설정해야 합니다:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시 (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🆘 문제 해결

### 자주 발생하는 문제

**Q: 환경 변수가 인식되지 않아요**  
A: `.env.local` 파일이 프로젝트 루트에 있는지 확인하고, 개발 서버를 재시작하세요.

**Q: 로그인 후 리다이렉트가 안 돼요**  
A: Clerk Dashboard에서 도메인 설정을 확인하고, 환경 변수의 URL이 정확한지 확인하세요.

**Q: 스타일이 적용되지 않아요**  
A: Tailwind CSS 빌드가 완료되었는지 확인하고, `npm run dev`로 개발 서버를 재시작하세요.

---

**💡 이 프로젝트가 도움이 되었다면 ⭐ 스타를 눌러주세요!**
