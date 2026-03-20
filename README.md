# Allora Store

Interface e-commerce com sistema de autenticação e proteção de rotas.

**Link do Projeto:** [https://allora-store-auth-flow-app.vercel.app](https://allora-store-auth-flow-app.vercel.app)

## Funcionalidades Principais

- **Landing Page**
- **Proteção de Rotas**:
  - Usuários logados são impedidos de acessar `/login` e `/register` (redirecionamento para `/dashboard`).
  - Acesso ao `/dashboard` é restrito apenas a usuários autenticados.
- **SPA Navigation**: Redirecionamentos internos tratados via router para evitar o _full page reload_.

## Credenciais de Teste

Acesso via API DummyJSON:

- **Usuário**: `emilys`
- **Senha**: `emilyspass`

## Tecnologias

- React + Vite
- @tanstack/react-router
- Tailwind CSS
- Shadcn UI (Radix UI)

---
