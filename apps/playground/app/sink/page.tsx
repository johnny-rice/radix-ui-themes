'use client';

import * as React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CircleBackslashIcon,
  DotsHorizontalIcon,
  GearIcon,
  InfoCircledIcon,
  Pencil2Icon,
  Share2Icon,
  StarIcon,
} from '@radix-ui/react-icons';
import NextLink from 'next/link';
import {
  Provider,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Checkbox,
  Code,
  Container,
  ContextMenu,
  Dialog,
  DropdownMenu,
  Em,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Kbd,
  Link,
  Popover,
  Quote,
  RadioGroup,
  ScrollArea,
  Section,
  Select,
  Separator,
  Slider,
  Strong,
  Sup,
  Switch,
  Tabs,
  TextArea,
  TextField,
  Text,
  Tooltip,
  // helpers
  colorScalesByGroup,
  buttonRadiusValues,
} from '@radix-ui/themes';
import { ControlPanel } from '../../components/control-panel';
import styles from './page.module.css';

const buttonVariants = [
  'surface',
  'solid',
  'subtle',
  'outline',
  'ghost',
  'surface-mono',
  'solid-mono',
  'subtle-mono',
  'outline-mono',
  'ghost-mono',
] as const;
const menuVariants = ['solid', 'subtle', 'solid-mono', 'subtle-mono'] as const;
const checkboxVariants = ['solid', 'solid-mono'] as const;
const radioGroupVariants = ['solid', 'solid-mono'] as const;
const switchVariants = ['solid', 'solid-mono'] as const;
const selectTriggerVariants = [
  'surface',
  'solid',
  'subtle',
  'outline',
  'ghost',
  'surface-mono',
  'solid-mono',
  'subtle-mono',
  'outline-mono',
  'ghost-mono',
] as const;
const selectMenuVariants = ['solid', 'subtle', 'solid-mono', 'subtle-mono'] as const;
const textFieldVariants = ['surface', 'surface-mono', 'subtle-mono'] as const;
const textAreaVariants = ['surface', 'surface-mono', 'subtle-mono'] as const;
const sliderVariants = ['solid', 'subtle', 'solid-mono', 'subtle-mono'] as const;
const avatarVariants = ['solid', 'subtle', 'solid-mono', 'subtle-mono'] as const;

export default function Sink() {
  return (
    <html
      lang="en"
      data-color-scale="indigo"
      data-gray-scale="natural"
      data-background-feel="natural"
      data-foreground-feel="natural"
      data-button-radius="medium"
      data-scaling="regular"
    >
      <body>
        <div id="root">
          <Provider
          // dir="rtl"
          >
            <ControlPanel defaultVisible />

            <header
              style={{ backgroundColor: 'var(--blackA2)', boxShadow: '0 0 0 0.5px var(--monoA6)' }}
            >
              <Container>
                <nav>
                  <Flex p="6" gap="5" align="center">
                    <Link asChild variant="high-contrast">
                      <NextLink href="sink">Kitchen sink</NextLink>
                    </Link>
                    <Separator orientation="vertical" />
                    <Link href="home-os" color="gray">
                      Home OS
                    </Link>
                    <Link href="snapshot" color="gray">
                      Snapshot
                    </Link>
                  </Flex>
                </nav>
              </Container>
            </header>

            <main
              className={styles.root}
              // dir="rtl"
            >
              <DocsSection title="Button">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                      <ColumnHeaderCell>size 3</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {buttonVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <Button size="1" variant={variant}>
                            <ArrowLeftIcon /> Back
                          </Button>
                        </td>
                        <td>
                          <Button size="2" variant={variant}>
                            <Pencil2Icon /> Edit
                          </Button>
                        </td>
                        <td>
                          <Button size="3" variant={variant}>
                            Next <ArrowRightIcon />
                          </Button>
                        </td>
                        <td>
                          <Button size="3" variant={variant} disabled>
                            Close <CircleBackslashIcon />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            <td>
                              <Button size="1" variant="solid" radius={radius}>
                                <ArrowLeftIcon /> size 1
                              </Button>
                            </td>
                            <td>
                              <Button size="2" variant="solid" radius={radius}>
                                <Pencil2Icon /> size 2
                              </Button>
                            </td>
                            <td>
                              <Button size="3" variant="solid" radius={radius}>
                                size 3 <ArrowRightIcon />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors & variants combinations</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {buttonVariants.map((variant) => (
                              <ColumnHeaderCell key={variant}>{variant}</ColumnHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {buttonVariants.map((variant) => (
                                <td key={variant}>
                                  <Button variant={variant} color={color}>
                                    <Pencil2Icon />
                                    Edit
                                  </Button>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>
              </DocsSection>

              <DocsSection title="IconButton">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                      <ColumnHeaderCell>size 3</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {buttonVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <IconButton size="1" variant={variant}>
                            <InfoCircledIcon />
                          </IconButton>
                        </td>
                        <td>
                          <IconButton size="2" variant={variant}>
                            <GearIcon />
                          </IconButton>
                        </td>
                        <td>
                          <IconButton size="3" variant={variant}>
                            <Share2Icon />
                          </IconButton>
                        </td>
                        <td>
                          <IconButton size="3" variant={variant} disabled>
                            <StarIcon />
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            <td>
                              <IconButton size="1" variant="solid" radius={radius}>
                                <InfoCircledIcon />
                              </IconButton>
                            </td>
                            <td>
                              <IconButton size="2" variant="solid" radius={radius}>
                                <GearIcon />
                              </IconButton>
                            </td>
                            <td>
                              <IconButton size="3" variant="solid" radius={radius}>
                                <Share2Icon />
                              </IconButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors & variants combinations</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {buttonVariants.map((variant) => (
                              <ColumnHeaderCell key={variant}>{variant}</ColumnHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {buttonVariants.map((variant) => (
                                <td key={variant}>
                                  <IconButton variant={variant} color={color}>
                                    <Share2Icon />
                                  </IconButton>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>
              </DocsSection>

              <DocsSection title="Badge">
                <Flex gap="3" wrap="wrap" style={{ maxWidth: 600 }}>
                  <Badge>Default</Badge>

                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      {colors.map((color) => (
                        <Badge key={color} color={color}>
                          {upperFirst(color)}
                        </Badge>
                      ))}
                    </React.Fragment>
                  ))}
                </Flex>

                <Separator size="3" my="5" />

                <Flex gap="3" align="center">
                  <Badge color="gray">Size 1</Badge>
                  <Badge color="gray" size="2">
                    Size 2
                  </Badge>
                </Flex>
              </DocsSection>

              <DocsSection title="Text">
                <Flex direction="column" gap="4">
                  <Text size="9">The quick brown fox jumped</Text>
                  <Text size="8">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="7">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="6">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="5">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="4">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="3">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="2">The quick brown fox jumped over the lazy dog</Text>
                  <Text size="1">The quick brown fox jumped over the lazy dog</Text>
                </Flex>
              </DocsSection>

              <DocsSection title="Code">
                <Text mb="5">
                  The <Code>console.log()</Code> method outputs a message to the web console
                </Text>
                <Flex direction="column" gap="4">
                  <Code size="9" highlighted={false}>
                    The quick brown fox jumped
                  </Code>
                  <Code size="8" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="7" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="6" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="5" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="4" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="3" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="2" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                  <Code size="1" highlighted={false}>
                    The quick brown fox jumped over the lazy dog
                  </Code>
                </Flex>
              </DocsSection>

              <DocsSection title="Heading">
                <Flex direction="column" gap="4">
                  <Heading size="9">The quick brown fox jumped</Heading>
                  <Heading size="8">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="7">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="6">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="5">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="4">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="3">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="2">The quick brown fox jumped over the lazy dog</Heading>
                  <Heading size="1">The quick brown fox jumped over the lazy dog</Heading>

                  <Flex direction="column" gap="6" mt="5">
                    <Heading size="9" style={{ width: '50%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="8" style={{ width: '40%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="7" style={{ width: '30%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="6" style={{ width: '25%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="5" style={{ width: '20%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="4" style={{ width: '15%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="3" style={{ width: '15%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="2" style={{ width: '15%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                    <Heading size="1" style={{ width: '10%' }}>
                      Principles of the Typographic Craft
                    </Heading>
                  </Flex>
                </Flex>
              </DocsSection>

              <DocsSection title="Typography">
                <Flex direction="column" gap="5" style={{ maxWidth: 688 }}>
                  <Text size="3">
                    The CSS rule <Code>-webkit-font-smoothing: antialiased;</Code> has been applied
                    to all fonts.google.com pages where fonts are rendered. This results in browsers
                    using the <Strong>greyscale antialiasing method</Strong> rather than default{' '}
                    <Em>subpixel rendering</Em> of fonts.{' '}
                    <Quote>
                      I believe this was probably introduced to get around inconsistencies in
                      rendering between browsers
                    </Quote>
                    , particular between Chrome and Safari on MacOS.
                    <Sup>1</Sup>
                  </Text>

                  <Heading size="9">
                    The principles of the Typographic Craft are difficult to master
                  </Heading>

                  <Heading size="8">
                    The goal of typography is to relate font size, line height, and line width
                  </Heading>

                  <Heading size="7">
                    The goal of typography is to relate font size, line height, and line width in a
                    proportional way
                  </Heading>

                  <Heading size="6">
                    The goal of typography is to relate font size, line height, and line width in a
                    proportional way
                  </Heading>

                  <Text color="gray" size="5">
                    The goal of typography is to relate font size, line height, and line width in a
                    proportional way that maximizes beauty and makes reading easier and more
                    pleasant.
                  </Text>

                  <Text size="4">
                    The goal of typography is to relate font size, line height, and line width in a
                    proportional way that maximizes beauty and makes reading easier and more
                    pleasant. The question is: What proportion(s) will give us the best results? The
                    golden ratio is often observed in nature where beauty and utility intersect;
                    perhaps we can use this “divine” proportion to enhance these attributes in our
                    typography.
                  </Text>

                  <Text size="3" style={{ maxWidth: 600 }}>
                    The goal of typography is to relate font size, line height, and line width in a
                    proportional way that maximizes beauty and makes reading easier and more
                    pleasant. The question is: What proportion(s) will give us the best results? The
                    golden ratio is often observed in nature where beauty and utility intersect;
                    perhaps we can use this “divine” proportion to enhance these attributes in our
                    typography.
                  </Text>

                  <Grid columns="2" gap="5">
                    <Text size="2" style={{ maxWidth: 400 }}>
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>

                    <Text size="1" style={{ maxWidth: 400 }}>
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>
                  </Grid>

                  <Separator size="3" my="5" />

                  <Box style={{ width: '55%' }}>
                    <Heading size="5" mb="2">
                      The principles of the Typographic Craft are difficult to master
                    </Heading>
                    <Text size="4">
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant.
                    </Text>
                  </Box>

                  <Grid columns="2" gap="5" mb="7">
                    <Box>
                      <Heading size="4" mb="2">
                        The principles of the Typographic Craft are difficult to master
                      </Heading>
                      <Text size="3">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="3" mb="2">
                        The principles of the Typographic Craft are difficult to master
                      </Heading>
                      <Text size="2">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>
                  </Grid>

                  <Grid columns="3" gap="5">
                    <Box>
                      <Heading size="2" mb="1">
                        The principles of the Typographic Craft are difficult to master
                      </Heading>
                      <Text size="2">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="2" mb="1">
                        The principles of the Typographic Craft are difficult to master
                      </Heading>
                      <Text size="1">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="1" mb="1">
                        The principles of the Typographic Craft are difficult to master
                      </Heading>
                      <Text size="1">
                        The goal of typography is to relate font size, line height, and line width
                        in a proportional way that maximizes beauty and makes reading easier and
                        more pleasant.
                      </Text>
                    </Box>
                  </Grid>

                  <Separator size="3" my="5" />

                  <Grid columns="2" gap="5">
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="1" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="1">
                        Extensions from added software
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="2" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="1">
                        Extensions from added software
                      </Text>
                    </Box>
                  </Grid>
                  <Grid columns="2" gap="5">
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="2" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="2">
                        Extensions from added software
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="3" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="2">
                        Extensions from added software
                      </Text>
                    </Box>
                  </Grid>

                  <Separator size="3" my="5" />

                  <Grid columns="2" gap="5">
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="1" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="1">
                        Extensions from added software for something to do with Apple Finder.
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="2" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="1">
                        Extensions from added software for something to do with Apple Finder.
                      </Text>
                    </Box>
                  </Grid>

                  <Grid columns="2" gap="5">
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="2" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="2">
                        Extensions from added software for something to do with Apple Finder.
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250 }}>
                      <Text size="3" weight="bold">
                        Quick Look
                      </Text>
                      <Text color="gray" size="2">
                        Extensions from added software for something to do with Apple Finder.
                      </Text>
                    </Box>
                  </Grid>

                  <Separator size="3" my="5" />

                  <Grid columns="2" gap="5">
                    <Box style={{ maxWidth: 250, textAlign: 'center' }}>
                      <Button variant="solid" size="1" mb="1">
                        Quick Look
                      </Button>
                      <Text color="gray" size="1">
                        Verification needed
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250, textAlign: 'center' }}>
                      <Button variant="solid" size="2" mb="1">
                        Quick Look
                      </Button>
                      <Text color="gray" size="1">
                        Verification needed
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250, textAlign: 'center' }}>
                      <Button variant="solid" size="1" mb="1">
                        Quick Look
                      </Button>
                      <Text color="gray" size="2">
                        Verification needed
                      </Text>
                    </Box>
                    <Box style={{ maxWidth: 250, textAlign: 'center' }}>
                      <Button variant="solid" size="2" mb="1">
                        Quick Look
                      </Button>
                      <Text color="gray" size="2">
                        Verification needed
                      </Text>
                    </Box>
                  </Grid>

                  <Separator size="3" my="5" />

                  <Blockquote>
                    The CSS rule <Code>-webkit-font-smoothing: antialiased;</Code> has been applied
                    to all fonts.google.com pages where fonts are rendered. This results in browsers
                    using the <strong>greyscale antialiasing method</strong> rather than default{' '}
                    <Em>subpixel rendering</Em> of fonts.{' '}
                    <Quote>
                      I believe this was probably introduced to get around inconsistencies in
                      rendering between browsers
                    </Quote>
                    , particular between Chrome and Safari on MacOS.
                    <Sup>1</Sup>
                  </Blockquote>
                </Flex>
              </DocsSection>

              <DocsSection title="Avatar">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      {(['1', '2', '3', '4', '5'] as const).map((size) => (
                        <ColumnHeaderCell key={size}>size {size}</ColumnHeaderCell>
                      ))}
                      <td>
                        <Text size="2">fallbacks →</Text>
                      </td>
                      <ColumnHeaderCell>default</ColumnHeaderCell>
                      <ColumnHeaderCell>1 letter</ColumnHeaderCell>
                      <ColumnHeaderCell>2 letters</ColumnHeaderCell>
                      <ColumnHeaderCell>custom icon</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {avatarVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        {(['1', '2', '3', '4', '5'] as const).map((size) => (
                          <td key={size}>
                            <Avatar size={size} variant={variant} src="./api/avatar" fallback="D" />
                          </td>
                        ))}
                        <td />
                        <td>
                          <Avatar variant={variant} />
                        </td>
                        <td>
                          <Avatar variant={variant} fallback="D" />
                        </td>
                        <td>
                          <Avatar variant={variant} fallback="BG" />
                        </td>
                        <td>
                          <Avatar variant={variant} fallback={<CustomUserIcon />} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          {(['1', '2', '3', '4', '5'] as const).map((size) => (
                            <ColumnHeaderCell key={size}>size {size}</ColumnHeaderCell>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            {(['1', '2', '3', '4', '5'] as const).map((size) => (
                              <td key={size}>
                                <Avatar size={size} radius={radius} fallback="D" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors & variants combinations</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {avatarVariants.map((variant) => (
                              <ColumnHeaderCell key={variant}>{variant}</ColumnHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {avatarVariants.map((variant) => (
                                <td key={variant}>
                                  <Avatar variant={variant} color={color} fallback="D" />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>
              </DocsSection>

              <DocsSection title="Dialog">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button variant="solid">Open</Button>
                  </Dialog.Trigger>
                  <Dialog.Content style={{ maxWidth: 450 }}>
                    <Flex direction="column" gap="3">
                      <Dialog.Title>Share resource</Dialog.Title>
                      <Dialog.Description size="2">
                        Jan Tschichold was a German calligrapher, typographer and book designer. He
                        played a significant role in the development of graphic design in the 20th
                        century.
                      </Dialog.Description>
                      <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                          <Button variant="subtle-mono">Cancel</Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button variant="solid">
                            Share <Share2Icon />
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </DocsSection>

              <DocsSection title="AlertDialog">
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button variant="solid">Open</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content style={{ maxWidth: 450 }}>
                    <Flex direction="column" gap="3">
                      <AlertDialog.Title>Revoke setup link</AlertDialog.Title>
                      <AlertDialog.Description size="2">
                        The setup link will no longer be accessible and any existing setup sessions
                        will be revoked.
                      </AlertDialog.Description>
                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="subtle-mono">Cancel</Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button variant="solid" color="red">
                            Revoke link
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </DocsSection>

              <DocsSection title="DropdownMenu">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {menuVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                              <Button variant="subtle-mono" size="1">
                                <DotsHorizontalIcon />
                              </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenuContentDemo variant={variant} size="1" />
                          </DropdownMenu.Root>
                        </td>
                        <td>
                          <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                              <Button variant="subtle-mono" size="2">
                                <DotsHorizontalIcon />
                              </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenuContentDemo variant={variant} size="2" />
                          </DropdownMenu.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DocsSection>

              <DocsSection title="ContextMenu">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {menuVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <ContextMenu.Root>
                            <ContextMenu.Trigger>
                              <RightClickArea size="1" />
                            </ContextMenu.Trigger>
                            <ContextMenuContentDemo variant={variant} size="1" />
                          </ContextMenu.Root>
                        </td>
                        <td>
                          <ContextMenu.Root>
                            <ContextMenu.Trigger>
                              <RightClickArea />
                            </ContextMenu.Trigger>
                            <ContextMenuContentDemo variant={variant} size="2" />
                          </ContextMenu.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DocsSection>

              <DocsSection title="HoverCard">
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link>A fancy link</Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content style={{ width: 200 }}>
                    <Text size="2">
                      Jan Tschichold was a German calligrapher, typographer and book designer. He
                      played a significant role in the development of graphic design in the 20th
                      century.
                    </Text>
                  </HoverCard.Content>
                </HoverCard.Root>
              </DocsSection>

              <DocsSection title="Popover">
                <Popover.Root>
                  <Popover.Trigger>
                    <Button variant="solid">Popover</Button>
                  </Popover.Trigger>
                  <Popover.Content>
                    <Box p="4" style={{ width: 200 }}>
                      <Text size="2" mb="2">
                        Jan Tschichold was a German calligrapher, typographer and book designer. He
                        played a significant role in the development of graphic design in the 20th
                        century.
                      </Text>
                      <Button variant="solid" size="1">
                        Share <Share2Icon />
                      </Button>
                    </Box>
                  </Popover.Content>
                </Popover.Root>
              </DocsSection>

              <DocsSection title="Tooltip">
                <Flex gap="5">
                  <Tooltip content="The quick brown fox">
                    <Button variant="solid" size="1">
                      Singleline
                    </Button>
                  </Tooltip>

                  <Tooltip
                    content="The goal of typography is to relate font size, line height, and line width in a
                    proportional way that maximizes beauty and makes reading easier and more
                    pleasant."
                    multiline
                  >
                    <Button variant="solid" size="1">
                      Multiline
                    </Button>
                  </Tooltip>
                </Flex>
              </DocsSection>

              <DocsSection title="Tabs">
                <table className={styles.table}>
                  <tbody>
                    {(['1', '2'] as const).map((size) => (
                      <tr key={size}>
                        <RowHeaderCell>size {size}</RowHeaderCell>
                        <td>
                          <Tabs.Root defaultValue="account" activationMode="manual">
                            <Tabs.List size={size}>
                              <Tabs.Trigger value="account">Account</Tabs.Trigger>
                              <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content value="account">
                              <Box py="5">Account</Box>
                            </Tabs.Content>
                            <Tabs.Content value="documents">
                              <Box py="5">Documents</Box>
                            </Tabs.Content>
                            <Tabs.Content value="settings">
                              <Box py="5">Settings</Box>
                            </Tabs.Content>
                          </Tabs.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DocsSection>

              <DocsSection title="Link">
                <Flex gap="4" mb="5">
                  <Link color="purple" href="/">
                    This is a link
                  </Link>
                  <Link color="gray" href="/">
                    This is a link
                  </Link>
                  <Link color="green" href="/">
                    This is a link
                  </Link>
                  <Link color="red" href="/">
                    This is a link
                  </Link>
                  <Link color="yellow" href="/">
                    This is a link
                  </Link>
                  <Link color="blue" href="/">
                    This is a link
                  </Link>
                </Flex>
                <Flex gap="4" mb="5">
                  <Link variant="high-contrast" color="purple" href="/">
                    This is a link
                  </Link>
                  <Link variant="high-contrast" color="gray" href="/">
                    This is a link
                  </Link>
                  <Link variant="high-contrast" color="green" href="/">
                    This is a link
                  </Link>
                  <Link variant="high-contrast" color="red" href="/">
                    This is a link
                  </Link>
                  <Link variant="high-contrast" color="yellow" href="/">
                    This is a link
                  </Link>
                  <Link variant="high-contrast" color="blue" href="/">
                    This is a link
                  </Link>
                </Flex>

                <Flex direction="column" align="start" gap="4" mb="5">
                  <Link href="/" size="9">
                    This is a link
                  </Link>
                  <Link href="/" size="8">
                    This is a link
                  </Link>
                  <Link href="/" size="7">
                    This is a link
                  </Link>
                  <Link href="/" size="6">
                    This is a link
                  </Link>
                  <Link href="/" size="5">
                    This is a link
                  </Link>
                  <Link href="/" size="4">
                    This is a link
                  </Link>
                  <Link href="/" size="3">
                    This is a link
                  </Link>
                  <Link href="/" size="2">
                    This is a link
                  </Link>
                  <Link href="/" size="1">
                    This is a link
                  </Link>

                  <Link color="purple" gap="1" href="/" size="3">
                    This is a link
                    <svg
                      fill="none"
                      height="15"
                      viewBox="0 0 15 15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>

                  <Link color="gray" gap="1" href="/" size="3">
                    This is a link
                    <svg
                      fill="none"
                      height="15"
                      viewBox="0 0 15 15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>

                  <Text size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Text size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Separator size="3" my="5" />

                  <Text color="gray" size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Text color="purple" size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Text color="blue" size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Text color="green" size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Text color="yellow" size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>

                  <Text color="red" size="6">
                    Single Sign-On (SSO) is the most frequently asked for requirement by enterprise
                    organizations looking to adopt new SaaS applications. SSO enables authentication
                    via an organization’s Identity Provider (IdP), such as Google Workspace or Okta,
                    as opposed to users or <Link href="/">IT admins</Link> managing hundreds, if not
                    thousands, of usernames and passwords. Facilitate greater security, easier
                    account management, and accelerated application onboarding and adoption by{' '}
                    <Link href="/">adding SSO to your app</Link>.
                  </Text>
                </Flex>
              </DocsSection>

              <DocsSection title="AspectRatio">
                <Grid gap="5" columns="4">
                  <div>
                    <Text size="1" color="gray" mb="2">
                      1x2
                    </Text>
                    <AspectRatio ratio={1 / 2}>{aspectRatioImage}</AspectRatio>
                  </div>
                  <div>
                    <Text size="1" color="gray" mb="2">
                      1x1
                    </Text>
                    <AspectRatio>{aspectRatioImage}</AspectRatio>
                  </div>
                  <div>
                    <Text size="1" color="gray" mb="2">
                      16x9
                    </Text>
                    <AspectRatio ratio={16 / 9}>{aspectRatioImage}</AspectRatio>
                  </div>
                  <div>
                    <Text size="1" color="gray" mb="2">
                      2x1
                    </Text>
                    <AspectRatio ratio={2 / 1}>{aspectRatioImage}</AspectRatio>
                  </div>
                </Grid>
              </DocsSection>

              <DocsSection title="ScrollArea">
                <Box style={{ width: 300, height: 350 }} mb="6">
                  <ScrollArea>
                    <Box
                      mb="3"
                      style={{
                        height: 200,
                        width: 600,
                        backgroundColor: 'var(--color3)',
                      }}
                    />
                    <Text>
                      The goal of typography is to relate font size, line height, and line width in
                      a proportional way that maximizes beauty and makes reading easier and more
                      pleasant. The question is: What proportion(s) will give us the best results?
                      The golden ratio is often observed in nature where beauty and utility
                      intersect; perhaps we can use this “divine” proportion to enhance these
                      attributes in our typography.
                    </Text>
                    <Box style={{ width: 300 }} my="3">
                      <AspectRatio ratio={16 / 9}>{aspectRatioImage}</AspectRatio>
                    </Box>
                    <Text size="3">
                      The CSS rule <Code>-webkit-font-smoothing: antialiased;</Code> has been
                      applied to all fonts.google.com pages where fonts are rendered. This results
                      in browsers using the <Strong>greyscale antialiasing method</Strong> rather
                      than default <Em>subpixel rendering</Em> of fonts.{' '}
                      <Quote>
                        I believe this was probably introduced to get around inconsistencies in
                        rendering between browsers
                      </Quote>
                      , particular between Chrome and Safari on MacOS.
                      <Sup>1</Sup>
                    </Text>
                    <Box style={{ width: 300 }}>
                      <AspectRatio ratio={1}>
                        <img
                          src="https://images.unsplash.com/photo-1683122803696-b3da13b071b2?&auto=format&fit=crop&w=400&q=80"
                          alt="A dragonfly on a branch"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </AspectRatio>
                    </Box>
                  </ScrollArea>
                </Box>

                <table className={styles.table}>
                  <tbody>
                    {(['1', '2', '3'] as const).map((size) => (
                      <tr key={size}>
                        <RowHeaderCell>size {size}</RowHeaderCell>
                        <td>
                          <Box style={{ width: 200, height: 20 }}>
                            <ScrollArea type="always" size={size} scrollbars="horizontal">
                              <Box style={{ width: 600, height: '100%' }} />
                            </ScrollArea>
                          </Box>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            {(['1', '2', '3'] as const).map((size) => (
                              <td key={size}>
                                <Box style={{ width: 200, height: 20 }}>
                                  <ScrollArea
                                    type="always"
                                    radius={radius}
                                    size={size}
                                    scrollbars="horizontal"
                                  >
                                    <Box style={{ width: 600, height: '100%' }} />
                                  </ScrollArea>
                                </Box>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>
              </DocsSection>

              <DocsSection title="Kbd">
                <Flex gap="4">
                  <Kbd>Enter</Kbd>
                  <Kbd>Tab</Kbd>
                  <Kbd>Shift + Tab</Kbd>
                  <Kbd width="command">⌘</Kbd>
                  <Kbd width="shift">⇧</Kbd>
                  <Kbd width="space">Space</Kbd>
                </Flex>
              </DocsSection>

              <DocsSection title="Checkbox">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>not checked</ColumnHeaderCell>
                      <ColumnHeaderCell>checked</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled checked</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {checkboxVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              <Checkbox variant={variant} mr="2" />I agree
                            </label>
                          </Text>
                        </td>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              <Checkbox variant={variant} mr="2" defaultChecked />I agree
                            </label>
                          </Text>
                        </td>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              <Checkbox variant={variant} mr="2" disabled />I agree
                            </label>
                          </Text>
                        </td>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              <Checkbox variant={variant} mr="2" disabled defaultChecked />I agree
                            </label>
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <table className={styles.table}>
                  <tbody>
                    {(['1', '2'] as const).map((size) => (
                      <tr key={size}>
                        <RowHeaderCell>size {size}</RowHeaderCell>
                        <td>
                          <Text size="2">
                            <label>
                              <Checkbox mr="2" size={size} defaultChecked />I agree
                            </label>
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            <td>
                              <Text size="2">
                                <label>
                                  <Checkbox radius={radius} mr="2" size="1" />I agree
                                </label>
                              </Text>
                            </td>
                            <td>
                              <Text size="2">
                                <label>
                                  <Checkbox radius={radius} mr="2" size="2" />I agree
                                </label>
                              </Text>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors & variants combinations</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {checkboxVariants.map((variant) => (
                              <ColumnHeaderCell key={variant}>{variant}</ColumnHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {checkboxVariants.map((variant) => (
                                <td key={variant}>
                                  <Text size="2" asChild>
                                    <label>
                                      <Checkbox
                                        variant={variant}
                                        color={color}
                                        defaultChecked
                                        mr="2"
                                      />
                                      I agree
                                    </label>
                                  </Text>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>

                <Separator size="3" my="5" />

                <Text mb="3">Alignement</Text>

                <Flex direction="column" gap="3" style={{ maxWidth: 300 }}>
                  <Text size="2">
                    <label>
                      <Checkbox mr="2" />
                      Agree to Terms and Conditions
                    </label>
                  </Text>

                  <Flex gap="2">
                    <Checkbox id={`align-1`} />
                    <Text size="2">
                      <label htmlFor={`align-1`}>
                        I understand that these documents are confidential and cannot be shared with
                        a third party.
                      </label>
                    </Text>
                  </Flex>

                  {(['1', '2', '3', '4'] as const).map((size) => (
                    <Flex align="center" gap="2" key={size}>
                      <Checkbox id={`align-size${size}`} />
                      <Text size={size}>
                        <label htmlFor={`align-size${size}`}>Agree to Terms and Conditions</label>
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </DocsSection>

              <DocsSection title="RadioGroup">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>not checked</ColumnHeaderCell>
                      <ColumnHeaderCell>checked</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled checked</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {radioGroupVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <RadioGroup.Root variant={variant}>
                            <Text size="2" asChild>
                              <label>
                                <RadioGroup.Item value="value" mr="2" />
                                My radio
                              </label>
                            </Text>
                          </RadioGroup.Root>
                        </td>
                        <td>
                          <RadioGroup.Root variant={variant}>
                            <Text size="2" asChild>
                              <label>
                                <RadioGroup.Item value="value" mr="2" defaultChecked />
                                My radio
                              </label>
                            </Text>
                          </RadioGroup.Root>
                        </td>
                        <td>
                          <RadioGroup.Root variant={variant}>
                            <Text size="2" asChild>
                              <label>
                                <RadioGroup.Item value="value" mr="2" disabled />
                                My radio
                              </label>
                            </Text>
                          </RadioGroup.Root>
                        </td>
                        <td>
                          <RadioGroup.Root variant={variant} disabled defaultChecked>
                            <Text size="2" asChild>
                              <label>
                                <RadioGroup.Item value="value" mr="2" />
                                My radio
                              </label>
                            </Text>
                          </RadioGroup.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <table className={styles.table}>
                  <tbody>
                    {(['1', '2'] as const).map((size) => (
                      <tr key={size}>
                        <RowHeaderCell>size {size}</RowHeaderCell>
                        <td>
                          <RadioGroup.Root size={size} defaultValue="value">
                            <Text size="2">
                              <label>
                                <RadioGroup.Item value="value" mr="2" />
                                My radio
                              </label>
                            </Text>
                          </RadioGroup.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors & variants combinations</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {checkboxVariants.map((variant) => (
                              <ColumnHeaderCell key={variant}>{variant}</ColumnHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {checkboxVariants.map((variant) => (
                                <td key={variant}>
                                  <RadioGroup.Root
                                    variant={variant}
                                    color={color}
                                    defaultValue="value"
                                  >
                                    <Text size="2" asChild>
                                      <label>
                                        <RadioGroup.Item value="value" mr="2" />
                                        My radio
                                      </label>
                                    </Text>
                                  </RadioGroup.Root>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>

                <Separator size="3" my="5" />

                <Text mb="3">Alignement</Text>

                <Flex direction="column" gap="3" style={{ maxWidth: 200 }}>
                  <RadioGroup.Root>
                    <Text size="2">
                      <label>
                        <RadioGroup.Item value="value" mr="2" />
                        My radio
                      </label>
                    </Text>
                  </RadioGroup.Root>

                  <RadioGroup.Root>
                    <label>
                      <Flex gap="2">
                        <RadioGroup.Item value="value" />
                        <Text size="2">Automatically based on mouse or trackpad</Text>
                      </Flex>
                    </label>
                  </RadioGroup.Root>

                  {(['1', '2', '3', '4'] as const).map((size) => (
                    <RadioGroup.Root key={size}>
                      <label>
                        <Flex align="center" gap="2">
                          <RadioGroup.Item value="value" />
                          <Text size={size}>Text size {size}</Text>
                        </Flex>
                      </label>
                    </RadioGroup.Root>
                  ))}
                </Flex>

                {/* <RadioGroup.Root defaultValue="scrolling">
            <label>
              <Flex gap="2" align="center">
                <RadioGroup.Item value="auto" />
                <Text size="2">Automatically based on mouse or trackpad</Text>
              </Flex>
            </label>
            <label>
              <Flex gap="2" align="center">
                <RadioGroup.Item value="scrolling" />
                <Text size="2">When scrolling</Text>
              </Flex>
            </label>
            <label>
              <Flex gap="2" align="center">
                <RadioGroup.Item value="always" />
                <Text size="2">Always</Text>
              </Flex>
            </label>
          </RadioGroup.Root> */}
              </DocsSection>

              <DocsSection title="Switch">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>not checked</ColumnHeaderCell>
                      <ColumnHeaderCell>checked</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled checked</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {switchVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              I agree
                              <Switch ml="2" variant={variant} />
                            </label>
                          </Text>
                        </td>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              I agree
                              <Switch ml="2" variant={variant} defaultChecked />
                            </label>
                          </Text>
                        </td>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              I agree
                              <Switch ml="2" variant={variant} disabled />
                            </label>
                          </Text>
                        </td>
                        <td>
                          <Text size="2" asChild>
                            <label>
                              I agree
                              <Switch ml="2" variant={variant} disabled defaultChecked />
                            </label>
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <table className={styles.table}>
                  <tbody>
                    {(['1', '2', '3'] as const).map((size) => (
                      <tr key={size}>
                        <RowHeaderCell>size {size}</RowHeaderCell>
                        <td>
                          <Text size="2">
                            <label>
                              I agree
                              <Switch ml="2" size={size} defaultChecked={size === '2'} />
                            </label>
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            <td>
                              <Text size="2">
                                <label>
                                  I agree
                                  <Switch size="1" ml="2" radius={radius} />
                                </label>
                              </Text>
                            </td>
                            <td>
                              <Text size="2">
                                <label>
                                  I agree
                                  <Switch size="2" ml="2" radius={radius} />
                                </label>
                              </Text>
                            </td>
                            <td>
                              <Text size="2">
                                <label>
                                  I agree
                                  <Switch size="3" ml="2" radius={radius} />
                                </label>
                              </Text>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {switchVariants.map((variant) => (
                              <RowHeaderCell key={variant}>{variant}</RowHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {switchVariants.map((variant) => (
                                <td key={variant}>
                                  <Text size="2" asChild>
                                    <label>
                                      I agree
                                      <Switch
                                        variant={variant}
                                        color={color}
                                        defaultChecked
                                        ml="2"
                                      />
                                    </label>
                                  </Text>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>

                <Separator size="3" my="5" />

                <Text mb="3">Alignement</Text>

                <Flex direction="column" gap="3" style={{ maxWidth: 324 }}>
                  <Text size="2">
                    <label>
                      <Switch mr="2" />
                      Agree to Terms and Conditions
                    </label>
                  </Text>

                  <label>
                    <Flex gap="2">
                      <Switch />
                      <Text size="2">
                        I understand that these documents are confidential and cannot be shared with
                        a third party.
                      </Text>
                    </Flex>
                  </label>

                  {(['1', '2', '3', '4'] as const).map((size) => (
                    <label key={size}>
                      <Flex align="center" gap="2">
                        <Switch />
                        <Text size={size}>Agree to Terms and Conditions</Text>
                      </Flex>
                    </label>
                  ))}
                </Flex>
              </DocsSection>

              <DocsSection title="Select">
                <Text my="5">Trigger variants:</Text>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {selectTriggerVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <Select.Root defaultValue="apple" size="1" triggerVariant={variant}>
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                        <td>
                          <Select.Root defaultValue="apple" size="2" triggerVariant={variant}>
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                        <td>
                          <Select.Root
                            defaultValue="apple"
                            size="2"
                            triggerVariant={variant}
                            disabled
                          >
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text mt="8" mb="4">
                  Menu variants:
                </Text>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell colSpan={2}>
                        position: &quot;item-aligned&quot;
                      </ColumnHeaderCell>
                      <ColumnHeaderCell colSpan={2}>position: &quot;popper&quot;</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {selectMenuVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <Select.Root defaultValue="apple" size="1" menuVariant={variant}>
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                        <td>
                          <Select.Root defaultValue="apple" size="2" menuVariant={variant}>
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                        <td>
                          <Select.Root
                            defaultValue="apple"
                            size="1"
                            menuVariant={variant}
                            position="popper"
                          >
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                        <td>
                          <Select.Root
                            defaultValue="apple"
                            size="2"
                            menuVariant={variant}
                            position="popper"
                          >
                            <SelectItemsDemo />
                          </Select.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            <td>
                              <Select.Root defaultValue="apple" size="1" radius={radius}>
                                <SelectItemsDemo />
                              </Select.Root>
                            </td>
                            <td>
                              <Select.Root defaultValue="apple" size="2" radius={radius}>
                                <SelectItemsDemo />
                              </Select.Root>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors & variants combinations</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {selectTriggerVariants.map((variant) => (
                              <ColumnHeaderCell key={variant}>{variant}</ColumnHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {selectTriggerVariants.map((variant) => (
                                <td key={variant}>
                                  <Select.Root
                                    defaultValue="apple"
                                    size="1"
                                    triggerVariant={variant}
                                    menuVariant="subtle"
                                    color={color}
                                  >
                                    <SelectItemsDemo />
                                  </Select.Root>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>
              </DocsSection>

              <DocsSection title="TextField">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                      <ColumnHeaderCell>size 3</ColumnHeaderCell>
                      <ColumnHeaderCell>value</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                      <ColumnHeaderCell>read-only</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {textFieldVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <TextField variant={variant} size="1" placeholder="Your name" />
                        </td>
                        <td>
                          <TextField variant={variant} size="2" placeholder="Your name" />
                        </td>
                        <td>
                          <TextField variant={variant} size="3" placeholder="Your name" />
                        </td>
                        <td>
                          <TextField variant={variant} defaultValue="The quick brown fox jumped" />
                        </td>
                        <td>
                          <TextField
                            variant={variant}
                            placeholder="Your name"
                            disabled
                            defaultValue="The quick brown fox jumped"
                          />
                        </td>
                        <td>
                          <TextField
                            variant={variant}
                            placeholder="Your name"
                            readOnly
                            defaultValue="The quick brown fox jumped"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            {(['1', '2', '3'] as const).map((size) => (
                              <td key={size}>
                                <TextField size={size} radius={radius} placeholder="Your name" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>
              </DocsSection>

              <DocsSection title="TextArea">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      <ColumnHeaderCell>size 1</ColumnHeaderCell>
                      <ColumnHeaderCell>size 2</ColumnHeaderCell>
                      <ColumnHeaderCell>size 3</ColumnHeaderCell>
                      <ColumnHeaderCell>value</ColumnHeaderCell>
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                      <ColumnHeaderCell>read-only</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {textAreaVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        <td>
                          <TextArea size="1" variant={variant} placeholder="Your feedback" />
                        </td>
                        <td>
                          <TextArea size="2" variant={variant} placeholder="Your feedback" />
                        </td>
                        <td>
                          <TextArea size="3" variant={variant} placeholder="Your feedback" />
                        </td>
                        <td>
                          <TextArea
                            variant={variant}
                            defaultValue="Love the new design, it's looking great!"
                          />
                        </td>
                        <td>
                          <TextArea
                            variant={variant}
                            placeholder="Your feedback"
                            disabled
                            defaultValue="The :autofill CSS pseudo-class matches when an <input> element has its value autofilled by the browser."
                          />
                        </td>
                        <td>
                          <TextArea
                            variant={variant}
                            placeholder="Your feedback"
                            readOnly
                            defaultValue="The :autofill CSS pseudo-class matches when an <input> element has its value autofilled by the browser."
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            {(['1', '2', '3'] as const).map((size) => (
                              <td key={size}>
                                <TextArea size={size} radius={radius} placeholder="Your feedback" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>
              </DocsSection>

              <DocsSection title="Slider">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <ColumnHeaderCell />
                      {(['1', '2', '3'] as const).map((size) => (
                        <ColumnHeaderCell key={size}>size {size}</ColumnHeaderCell>
                      ))}
                      <ColumnHeaderCell>disabled</ColumnHeaderCell>
                    </tr>
                  </thead>
                  <tbody>
                    {sliderVariants.map((variant) => (
                      <tr key={variant}>
                        <RowHeaderCell>{variant}</RowHeaderCell>
                        {(['1', '2', '3'] as const).map((size) => (
                          <td key={size} style={{ minWidth: 150 }}>
                            <Slider size={size} variant={variant} defaultValue={[50]} />
                          </td>
                        ))}
                        <td style={{ minWidth: 150 }}>
                          <Slider variant={variant} defaultValue={[50]} size="3" disabled />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Flex gap="5" style={{ height: 200 }} mt="5">
                  {(['1', '2', '3'] as const).map((size, i, sizes) => {
                    return (
                      <React.Fragment key={size}>
                        {sliderVariants.map((variant, j, variants) => {
                          const stepCount = variants.length * sizes.length - 1;
                          const step = i * variants.length + j;
                          const value =
                            25 + Math.round(Math.sin(Math.PI * (step / stepCount)) * 50);
                          return (
                            <Slider
                              key={variant}
                              orientation="vertical"
                              defaultValue={[value]}
                              size={size}
                              variant={variant}
                            />
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </Flex>

                <Separator size="3" my="5" />

                <Slider defaultValue={[25, 75]} />

                <Separator size="3" my="5" />

                <Text my="5">
                  <Code>radius</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See specific radius examples</span>
                    </Text>
                  </summary>
                  <Box mt="3">
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <ColumnHeaderCell />
                          <ColumnHeaderCell>size 1</ColumnHeaderCell>
                          <ColumnHeaderCell>size 2</ColumnHeaderCell>
                          <ColumnHeaderCell>size 3</ColumnHeaderCell>
                        </tr>
                      </thead>
                      <tbody>
                        {buttonRadiusValues.map((radius) => (
                          <tr key={radius}>
                            <RowHeaderCell>{radius}</RowHeaderCell>
                            {(['1', '2', '3'] as const).map((size) => (
                              <td key={size} style={{ minWidth: 150 }}>
                                <Slider size={size} radius={radius} defaultValue={[50]} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </details>

                <Text my="5">
                  <Code>color</Code> can be set per instance:
                </Text>

                <details>
                  <summary>
                    <Text size="2" color="gray" asChild>
                      <span>See colors</span>
                    </Text>
                  </summary>
                  {colorScalesByGroup.map(({ label, colors }) => (
                    <React.Fragment key={label}>
                      <Text weight="bold" mt="6" mb="4">
                        {label}
                      </Text>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <ColumnHeaderCell />
                            {sliderVariants.map((variant) => (
                              <RowHeaderCell key={variant}>{variant}</RowHeaderCell>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {colors.map((color) => (
                            <tr key={color}>
                              <RowHeaderCell>{color}</RowHeaderCell>
                              {sliderVariants.map((variant) => (
                                <td key={variant} style={{ minWidth: 150 }}>
                                  <Slider variant={variant} color={color} defaultValue={[50]} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </details>
              </DocsSection>

              <Box className="dark-theme" style={{ backgroundColor: 'var(--background-feel)' }}>
                <DocsSection title="Playground">
                  <Text mb="5">
                    In this section, I am just throwing together some of the components to get a
                    sense of how harmonious they are.
                  </Text>
                  <Flex gap="9">
                    {(['1', '2', '3'] as const).map((size) => (
                      <Flex
                        key={size}
                        direction="column"
                        gap="3"
                        style={{ width: (Number(size) + 1) * 100 }}
                      >
                        <Grid gap="1">
                          <Text size={size} weight="bold">
                            Name
                          </Text>
                          <TextField size={size} placeholder="Your name" />
                        </Grid>
                        <Grid gap="1">
                          <Text size={size} weight="bold">
                            Email
                          </Text>
                          <TextField size={size} placeholder="Your email" />
                        </Grid>
                        <Grid gap="1">
                          <Text size={size} weight="bold">
                            Feedback
                          </Text>
                          <TextArea size={size} placeholder="Your feedback" />
                        </Grid>
                        <Button size={size}>Submit</Button>
                      </Flex>
                    ))}
                  </Flex>
                </DocsSection>
              </Box>
            </main>
          </Provider>
        </div>
      </body>
    </html>
  );
}

function DropdownMenuContentDemo({ variant, size }: any) {
  return (
    <DropdownMenu.Content variant={variant} size={size}>
      <DropdownMenu.Item shortcut="⌘+T">New Tab</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⌘+N">New Window</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⇧+⌘+N" disabled>
        New Private Window
      </DropdownMenu.Item>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>More Tools</DropdownMenu.SubTrigger>

        <DropdownMenu.SubContent variant={variant} size={size}>
          <DropdownMenu.Item shortcut="⌘+S">Save Page As…</DropdownMenu.Item>
          <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>
          <DropdownMenu.Item>Name Window…</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>

      <DropdownMenu.Separator />

      <DropdownMenu.CheckboxItem shortcut="⌘+B" checked>
        Show Bookmarks
      </DropdownMenu.CheckboxItem>
      <DropdownMenu.CheckboxItem>Show Full URLs</DropdownMenu.CheckboxItem>

      <DropdownMenu.Separator />

      <DropdownMenu.Label>People</DropdownMenu.Label>
      <DropdownMenu.RadioGroup value="pedro">
        <DropdownMenu.RadioItem value="pedro">Pedro Duarte</DropdownMenu.RadioItem>
        <DropdownMenu.RadioItem value="colm">Colm Tuite</DropdownMenu.RadioItem>
      </DropdownMenu.RadioGroup>
    </DropdownMenu.Content>
  );
}

function ContextMenuContentDemo({ variant, size }: any) {
  return (
    <ContextMenu.Content variant={variant} size={size}>
      <ContextMenu.Item shortcut="⌘+T">New Tab</ContextMenu.Item>
      <ContextMenu.Item shortcut="⌘+N">New Window</ContextMenu.Item>
      <ContextMenu.Item shortcut="⇧+⌘+N" disabled>
        New Private Window
      </ContextMenu.Item>
      <ContextMenu.Sub>
        <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>

        <ContextMenu.SubContent variant={variant} size={size}>
          <ContextMenu.Item shortcut="⌘+S">Save Page As…</ContextMenu.Item>
          <ContextMenu.Item>Create Shortcut…</ContextMenu.Item>
          <ContextMenu.Item>Name Window…</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Developer Tools</ContextMenu.Item>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>

      <ContextMenu.Separator />

      <ContextMenu.CheckboxItem shortcut="⌘+B" checked>
        Show Bookmarks
      </ContextMenu.CheckboxItem>
      <ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>

      <ContextMenu.Separator />

      <ContextMenu.Label>People</ContextMenu.Label>
      <ContextMenu.RadioGroup value="pedro">
        <ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
      </ContextMenu.RadioGroup>
    </ContextMenu.Content>
  );
}

function RightClickArea({ size = '2', ...props }: any) {
  return (
    <Grid
      height={size === '2' ? '8' : '6'}
      px="3"
      {...props}
      style={{
        placeItems: 'center',
        borderRadius: 'var(--br-3)',
        border: '1px dashed var(--color6)',
        cursor: 'default',
        ...props.style,
      }}
    >
      <Text asChild size="1" color="color">
        <span>Right-click here</span>
      </Text>
    </Grid>
  );
}

function SelectItemsDemo() {
  return (
    <>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="grapes" disabled>
          Grape
        </Select.Item>
      </Select.Group>

      <Select.Separator />

      <Select.Group>
        <Select.Label>Vegetables</Select.Label>
        <Select.Item value="carrot">Carrot</Select.Item>
        <Select.Item value="potato">Potato</Select.Item>
      </Select.Group>
    </>
  );
}

function DocsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Container>
        <Section>
          <Box px="6">
            <Text size="6" mb="4" asChild>
              <h1>
                <Link href={`#${title}`} id={title}>
                  {title}
                </Link>
              </h1>
            </Text>
            {children}
          </Box>
        </Section>
      </Container>
      <Separator size="4" />
    </>
  );
}

function ColumnHeaderCell({ children, ...props }: React.ComponentProps<'th'>) {
  return (
    <th {...props}>
      {children && (
        <Text color="gray" size="2">
          {children}
        </Text>
      )}
    </th>
  );
}

function RowHeaderCell({ children, ...props }: React.ComponentProps<'td'>) {
  return (
    <td {...props}>
      {children && (
        <Text color="gray" size="2">
          {children}
        </Text>
      )}
    </td>
  );
}

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const aspectRatioImage = (
  <img
    src="https://images.unsplash.com/photo-1605030753481-bb38b08c384a?&auto=format&fit=crop&w=400&q=80"
    alt="A house in a forest"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
);

function CustomUserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
}