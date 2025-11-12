import { supabase } from './supabase';

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export const authService = {
  // Cadastrar novo usuário
  async signUp({ email, password, name }: SignUpData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
        emailRedirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`,
      },
    });

    if (error) {
      // Mensagens de erro mais amigáveis
      if (error.message.includes('already registered')) {
        throw new Error('Este email já está cadastrado. Faça login.');
      }
      throw new Error(error.message);
    }
    
    return data;
  },

  // Fazer login com email e senha cadastrados
  async signIn({ email, password }: SignInData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Mensagens de erro mais amigáveis
      if (error.message.includes('Invalid login credentials')) {
        throw new Error('Email ou senha incorretos. Verifique seus dados.');
      }
      if (error.message.includes('Email not confirmed')) {
        throw new Error('Confirme seu email antes de fazer login.');
      }
      throw new Error(error.message);
    }
    
    return data;
  },

  // Fazer logout
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // Obter usuário atual
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },

  // Resetar senha
  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/reset-password`,
    });
    
    if (error) {
      throw new Error('Erro ao enviar email de recuperação. Verifique o email digitado.');
    }
  },

  // Verificar se usuário está autenticado
  async isAuthenticated() {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  },
};
