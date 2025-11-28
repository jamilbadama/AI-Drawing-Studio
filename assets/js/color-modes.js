/*!
 * Color mode detection for Bootstrap's Album template
 * Automatically detects system theme preference
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', 'light')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  // Set initial theme
  const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'auto'
  setTheme(currentTheme)

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (!storedTheme || storedTheme === 'auto') {
      setTheme('auto')
    }
  })

  // Optional: Support theme switcher buttons if they exist
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
        })
      })
  })
})()
