import React, { useState } from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('PokemonSearch', () => {
  it('should render', () => {
    render(<PokemonSearch />)
  })
})
