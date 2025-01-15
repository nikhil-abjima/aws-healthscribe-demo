// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';

import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextContent from '@cloudscape-design/components/text-content';

export function Overview() {
    return (
        <SpaceBetween size={'s'}>
            <Header variant="h2">Overview</Header>
            <Container>
                <SpaceBetween size={'s'}>
                    <TextContent>
                        <Box variant="p">
                            This web app shows to generate the transcribe.
                        </Box>
                    </TextContent>
                </SpaceBetween>
            </Container>
        </SpaceBetween>
    );
}

export function Highlights() {
    return (
        <SpaceBetween size={'s'}>
            // <Header variant="h2">Highlights</Header>
            // <Container>
                // <ul>
                    // <li>Submit an audio file for AWS HealthScribe.</li>
                    // <li>View AWS HealthScribe results.</li>
                    // <li>Record or generate audio.</li>
                    // <li>Integration with Amazon Comprehend Medical.</li>
                // </ul>
            // </Container>
        </SpaceBetween>
    );
}

export function Details() {
    return (
        <SpaceBetween size={'s'}>
            <Header variant="h2">
                <span>Details</span>
            </Header>
            <Container>
                <SpaceBetween size={'s'}>
                    <Box>
                        <b>View HealthScribe results</b>, including:
                        <ul>
                            <li>Summarized clinical notes</li>
                            <li>Rich consultation transcripts</li>
                            <li>Transcript segmentation</li>
                            <li>Evidence mapping</li>
                            <li>Structured medical terms</li>
                        </ul>
                    </Box>
                    
                </SpaceBetween>
            </Container>
        </SpaceBetween>
    );
}

export function Footer() {
    return (
        <Container>
            <Box textAlign="center" color="text-body-secondary" fontSize="body-s">
                <p>Copyright @ 2025</p>
            </Box>
        </Container>
    );
}
