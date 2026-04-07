import { useAuth } from '@clerk/react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const useApiService = () => {
  const { getToken } = useAuth();

  const analyzeJobDescription = async (jdText, mode = 'full') => {
    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          jdText,
          mode,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to analyze job description');
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data,
        fromCache: data.fromCache,
      };
    } catch (error) {
      console.error('[API Error]', error);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const getAnalysisHistory = async () => {
    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/api/history`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch history');
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data,
      };
    } catch (error) {
      console.error('[API Error]', error);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  return {
    analyzeJobDescription,
    getAnalysisHistory,
  };
};
